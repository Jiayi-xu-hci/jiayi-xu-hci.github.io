// usage: frames <video> <outPrefix> <maxWidth> <t1> [t2 ...]   (t as fraction of duration if <= 1, else seconds)
import AVFoundation
import AppKit
let a = CommandLine.arguments
let asset = AVURLAsset(url: URL(fileURLWithPath: a[1]))
let dur = CMTimeGetSeconds(asset.duration)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = .zero; gen.requestedTimeToleranceAfter = .zero
let maxW = Double(a[3])!
gen.maximumSize = CGSize(width: maxW, height: maxW)
for (i, ts) in a[4...].enumerated() {
  let v = Double(ts)!; let t = v <= 1 ? v * dur : v
  guard let cg = try? gen.copyCGImage(at: CMTime(seconds: t, preferredTimescale: 600), actualTime: nil) else { print("fail \(t)"); continue }
  let rep = NSBitmapImageRep(cgImage: cg)
  let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.82])!
  try! data.write(to: URL(fileURLWithPath: "\(a[2])-\(i).jpg"))
}
print(String(format: "%.1fs", dur))
