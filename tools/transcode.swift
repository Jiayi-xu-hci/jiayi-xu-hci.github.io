// usage: transcode <in> <out.mp4> <maxLongSide> <videoBitsPerSec>
// Re-encodes to H.264 (High) + AAC 128k, keeping orientation and audio.
import AVFoundation
let a = CommandLine.arguments
let asset = AVURLAsset(url: URL(fileURLWithPath: a[1]))
let out = URL(fileURLWithPath: a[2]); try? FileManager.default.removeItem(at: out)
let maxSide = Double(a[3])!, bitrate = Int(a[4])!
let vTrack = asset.tracks(withMediaType: .video)[0]
let aTrack = asset.tracks(withMediaType: .audio).first
let nat = vTrack.naturalSize
let scale = min(1, maxSide / Double(max(nat.width, nat.height)))
func even(_ x: Double) -> Int { Int((x / 2).rounded()) * 2 }
let w = even(Double(nat.width) * scale), h = even(Double(nat.height) * scale)

let reader = try! AVAssetReader(asset: asset)
let writer = try! AVAssetWriter(outputURL: out, fileType: .mp4)
writer.shouldOptimizeForNetworkUse = true

let vOut = AVAssetReaderTrackOutput(track: vTrack, outputSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange])
vOut.alwaysCopiesSampleData = false
reader.add(vOut)
let fps = max(24, min(30, Double(vTrack.nominalFrameRate)))
let vIn = AVAssetWriterInput(mediaType: .video, outputSettings: [
  AVVideoCodecKey: AVVideoCodecType.h264, AVVideoWidthKey: w, AVVideoHeightKey: h,
  AVVideoScalingModeKey: AVVideoScalingModeResizeAspect,
  AVVideoCompressionPropertiesKey: [AVVideoAverageBitRateKey: bitrate, AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
                                    AVVideoMaxKeyFrameIntervalKey: Int(fps * 2), AVVideoExpectedSourceFrameRateKey: Int(fps)]])
vIn.transform = vTrack.preferredTransform
vIn.expectsMediaDataInRealTime = false
writer.add(vIn)

var aOut: AVAssetReaderTrackOutput?, aIn: AVAssetWriterInput?
if let t = aTrack {
  let o = AVAssetReaderTrackOutput(track: t, outputSettings: [AVFormatIDKey: kAudioFormatLinearPCM])
  reader.add(o); aOut = o
  let i = AVAssetWriterInput(mediaType: .audio, outputSettings: [AVFormatIDKey: kAudioFormatMPEG4AAC, AVNumberOfChannelsKey: 2, AVSampleRateKey: 48000, AVEncoderBitRateKey: 128000])
  i.expectsMediaDataInRealTime = false
  writer.add(i); aIn = i
}
reader.startReading(); writer.startWriting(); writer.startSession(atSourceTime: .zero)
let g = DispatchGroup()
func pump(_ i: AVAssetWriterInput, _ o: AVAssetReaderTrackOutput, _ q: String) {
  g.enter()
  i.requestMediaDataWhenReady(on: DispatchQueue(label: q)) {
    while i.isReadyForMoreMediaData {
      if let b = o.copyNextSampleBuffer() { i.append(b) } else { i.markAsFinished(); g.leave(); return }
    }
  }
}
pump(vIn, vOut, "v"); if let i = aIn, let o = aOut { pump(i, o, "a") }
g.wait()
let sem = DispatchSemaphore(value: 0)
writer.finishWriting { sem.signal() }; sem.wait()
if writer.status != .completed || reader.status == .failed { print("FAILED", writer.error ?? reader.error ?? "?"); exit(1) }
let size = (try! FileManager.default.attributesOfItem(atPath: out.path)[.size] as! Int)
print("\(out.lastPathComponent) \(w)x\(h) \(size / 1_000_000) MB")
