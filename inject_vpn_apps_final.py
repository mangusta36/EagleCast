import os

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

# 1. VPN guide
vpn_path = os.path.join(posts_dir, "vpn-guide.ts")
with open(vpn_path, "r", encoding="utf-8") as f:
    c = f.read()

extra_vpn_paras = [
    "When selecting a VPN protocol for high-bandwidth 4K video streaming, WireGuard is significantly superior to legacy OpenVPN TCP protocols. WireGuard operates directly within the Linux kernel space on Android OS and Fire OS, avoiding user-space memory copies and reducing encryption latency to under 5 milliseconds.",
    "Furthermore, VPN split-tunneling configuration allows subscribers to specify exactly which applications route through encrypted tunnels. By keeping system software updates and local media applications on direct unencrypted ISP connections, you reserve maximum VPN bandwidth for your primary IPTV player app."
]
formatted = ",\n        ".join([f'"{p}"' for p in extra_vpn_paras])
c = c.replace('paragraphs: [', f'paragraphs: [\n        {formatted},\n', 1)
with open(vpn_path, "w", encoding="utf-8") as f:
    f.write(c)

# 2. Apps shootout
apps_path = os.path.join(posts_dir, "apps-shootout.ts")
with open(apps_path, "r", encoding="utf-8") as f:
    c = f.read()

extra_apps_paras = [
    "Evaluating app performance on low-power streaming devices like the Fire TV Stick Lite requires measuring RAM usage during EPG database indexing. Tivimate maintains an ultra-low memory footprint of under 180 MB, whereas feature-heavy media centers can consume over 400 MB of RAM.",
    "In addition, playlist migration between applications is streamlined when providers utilize the Xtream Codes API standard. Users simply input their Server URL, Username, and Password into the new player app, and all channel categories, VOD movie folders, and EPG feeds populate automatically within seconds."
]
formatted = ",\n        ".join([f'"{p}"' for p in extra_apps_paras])
c = c.replace('paragraphs: [', f'paragraphs: [\n        {formatted},\n', 1)
with open(apps_path, "w", encoding="utf-8") as f:
    f.write(c)

print("VPN and Apps final injection complete.")
