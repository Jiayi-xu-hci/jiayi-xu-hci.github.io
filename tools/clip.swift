// usage: clip <in> <out.mp4> <start> <seconds> <maxLongSide> <videoBitsPerSec>   (start as fraction of duration if <= 1, else seconds)
// Cuts a short silent H.264 clip for hover previews.
import AVFoundation
let a = CommandLine.arguments
let asset = AVURLAsset(url: URL(fileURLWithPath: a[1]))
let out = URL(fileURLWithPath: a[2]); try? FileManager.default.removeItem(at: out)
let dur = CMTimeGetSeconds(asset.duration)
let s = Double(a[3])!, len = Double(a[4])!
let start = min(max(0, s <= 1 ? s * dur : s), max(0, dur - len))
let range = CMTimeRange(start: CMTime(seconds: start, preferredTimescale: 600), duration: CMTime(seconds: min(len, dur), preferredTimescale: 600))
let maxSide = Double(a[5])!, bitrate = Int(a[6])!
let vTrack = asset.tracks(withMediaType: .video)[0]
let nat = vTrack.naturalSize
let scale = min(1, maxSide / Double(max(nat.width, nat.height)))
func even(_ x: Double) -> Int { Int((x / 2).rounded()) * 2 }
let w = even(Double(nat.width) * scale), h = even(Double(nat.height) * scale)

let reader = try! AVAssetReader(asset: asset)
reader.timeRange = range
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
reader.startReading(); writer.startWriting(); writer.startSession(atSourceTime: range.start)
let done = DispatchSemaphore(value: 0)
vIn.requestMediaDataWhenReady(on: DispatchQueue(label: "v")) {
  while vIn.isReadyForMoreMediaData {
    if let b = vOut.copyNextSampleBuffer() { vIn.append(b) } else { vIn.markAsFinished(); done.signal(); return }
  }
}
done.wait()
writer.endSession(atSourceTime: range.end)
let sem = DispatchSemaphore(value: 0)
writer.finishWriting { sem.signal() }; sem.wait()
if writer.status != .completed || reader.status == .failed { print("FAILED", writer.error ?? reader.error ?? "?"); exit(1) }
let size = (try! FileManager.default.attributesOfItem(atPath: out.path)[.size] as! Int)
print(String(format: "%@ %dx%d %.1fs from %.1fs, %d KB", out.lastPathComponent, w, h, min(len, dur), start, size / 1000))
