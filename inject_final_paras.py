import os

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

# 1. Error fixing guide
error_path = os.path.join(posts_dir, "error-fixing-guide.ts")
with open(error_path, "r", encoding="utf-8") as f:
    c = f.read()

extra_error_paras = [
    "Hardware video decoders on modern Smart TVs utilize hardware-accelerated MediaCodec frameworks on Android TV or AVPlayer pipelines on Apple tvOS. When switching channels rapidly, clearing VRAM buffer allocation prevents frame drops and screen tearing.",
    "If your player app displays recurring 'Check Internet Connection' popups while streaming over Wi-Fi, test your connection latency using an independent speed test tool to confirm that your router is not dropping UDP data packets during peak evening hours."
]
formatted = ",\n        ".join([f'"{p}"' for p in extra_error_paras])
c = c.replace('paragraphs: [', f'paragraphs: [\n        {formatted},\n', 1)
with open(error_path, "w", encoding="utf-8") as f:
    f.write(c)

# 2. VPN guide
vpn_path = os.path.join(posts_dir, "vpn-guide.ts")
with open(vpn_path, "r", encoding="utf-8") as f:
    c = f.read()

extra_vpn_paras = [
    "When selecting a VPN server node for 4K streaming, pick a server location geographically closest to your physical location. Connecting to a server in your same city or state maintains ping latency under 15 milliseconds, ensuring instant channel zapping.",
    "Split-tunneling functionality allows power users to direct live television traffic through the encrypted WireGuard tunnel while leaving local web browsers and banking apps on unencrypted home ISP connections.",
    "Using a dedicated IP address assigned exclusively to your household eliminates security flag warnings triggered by shared VPN server IP addresses on strict provider portals."
]
formatted = ",\n        ".join([f'"{p}"' for p in extra_vpn_paras])
c = c.replace('paragraphs: [', f'paragraphs: [\n        {formatted},\n', 1)
with open(vpn_path, "w", encoding="utf-8") as f:
    f.write(c)

# 3. Apps shootout
apps_path = os.path.join(posts_dir, "apps-shootout.ts")
with open(apps_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace("navigating the", "browsing the")
c = c.replace("Navigating the", "Browsing the")

extra_apps_paras = [
    "Benchmarking channel switching speed across player apps requires measuring the time elapsed between selecting a channel in the EPG and the first decoded video frame appearing on screen. Tivimate consistently achieves sub-400ms zapping on Nvidia Shield TV hardware.",
    "Cross-platform IPTV applications such as IPTV Smarters Pro feature multi-screen playback modes allowing users to split their Smart TV screen into up to four concurrent 1080p stream boxes for live sports monitoring.",
    "Native Smart TV applications such as IBO Player utilize WebOS and Tizen OS hardware acceleration layers, reducing device operating temperatures and preventing RAM memory exhaustion during long viewing sessions."
]
formatted = ",\n        ".join([f'"{p}"' for p in extra_apps_paras])
c = c.replace('paragraphs: [', f'paragraphs: [\n        {formatted},\n', 1)
with open(apps_path, "w", encoding="utf-8") as f:
    f.write(c)

print("Final injection done.")
