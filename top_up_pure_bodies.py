import os

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

# 1. Top up apple-guide.ts
apple_path = os.path.join(posts_dir, "apple-guide.ts")
with open(apple_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'When streaming international channels encoded in AC-3 or E-AC-3 audio formats, ensure your app player engine (such as VLC Engine in GSE Smart IPTV) is selected to prevent silent audio playback.',
    'When streaming international channels encoded in AC-3 or E-AC-3 audio formats, ensure your app player engine (such as VLC Engine in GSE Smart IPTV) is selected to prevent silent audio playback.\n        "In addition, Apple TV 4K includes auto-frame-rate matching that automatically detects whether a live channel is broadcasting at 50Hz (PAL format for European sports) or 60Hz (NTSC format for North American sports), switching your TV display refresh rate without screen flickering.",\n        "Configuring Siri Remote touch surface tracking speed under tvOS Settings to \'Slow\' or \'Medium\' prevents accidental channel skips when navigating dense EPG program grids."'
)

with open(apple_path, "w", encoding="utf-8") as f:
    f.write(c)


# 2. Top up error-fixing-guide.ts
error_path = os.path.join(posts_dir, "error-fixing-guide.ts")
with open(error_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'Fix Step 3: Connect your VPN to a secondary server location (e.g. switch from Chicago to Dallas). This routes your stream through a separate, unblocked ISP peering gateway.',
    'Fix Step 3: Connect your VPN to a secondary server location (e.g. switch from Chicago to Dallas). This routes your stream through a separate, unblocked ISP peering gateway.\n        "Fix Step 4: Verify that your IPTV provider account subscription is active and has not reached its maximum device connection limit. When connection limits are reached, server firewalls automatically return connection socket timeouts.",\n        "Fix Step 5: Check your router\'s MTU (Maximum Transmission Unit) packet size settings. Setting MTU size to 1492 for PPPoE or 1500 for standard DHCP prevents packet fragmentation and socket drops during live 4K streams.",\n        "Fix Step 6: Test your connection speed using an independent speed test utility on your streaming box to confirm that your local ISP is not throttling UDP traffic ports during peak evening hours."'
)

with open(error_path, "w", encoding="utf-8") as f:
    f.write(c)


# 3. Top up vpn-guide.ts
vpn_path = os.path.join(posts_dir, "vpn-guide.ts")
with open(vpn_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'Furthermore, encrypted VPN tunnels obscure the SNI domain payload during TLS handshakes, preventing ISP firewalls from blocking connection requests to live broadcasting gateways.',
    'Furthermore, encrypted VPN tunnels obscure the SNI domain payload during TLS handshakes, preventing ISP firewalls from blocking connection requests to live broadcasting gateways.\n        "When choosing a VPN protocol for Firestick or Android TV streaming boxes, always select WireGuard over OpenVPN. WireGuard establishes connections in under 100 milliseconds and maintains stable encrypted tunnels even when Wi-Fi signals fluctuate.",\n        "In addition, WireGuard\'s lightweight codebase requires significantly less memory RAM on low-cost streaming devices, preserving hardware resources for high-bitrate 4K video rendering.",\n        "If your home network uses a mesh Wi-Fi system, installing the VPN directly on your main router unit ensures that all connected Smart TVs, Apple TVs, and handheld devices enjoy automatic encrypted protection without individual app setups."'
)

with open(vpn_path, "w", encoding="utf-8") as f:
    f.write(c)


# 4. Top up apps-shootout.ts
apps_path = os.path.join(posts_dir, "apps-shootout.ts")
with open(apps_path, "r", encoding="utf-8") as f:
    c = f.read()

# Replace any remaining cliche text
c = c.replace('navigating', 'exploring')
c = c.replace('Navigating', 'Exploring')

c = c.replace(
    'IPTV Smarters Pro (Catch-up Score: 8.5/10): Organized catch-up dashboard sorted by date and show name.',
    'IPTV Smarters Pro (Catch-up Score: 8.5/10): Organized catch-up dashboard sorted by date and show name.\n        "IBO Player (Catch-up Score: 8.0/10): Clean catch-up menu optimized for LG and Samsung TV remote controls.",\n        "Summary of Replay Features: For users who rely heavily on past TV archives, Tivimate provides the most natural cable-like catch-up navigation experience directly from the main EPG grid overlay.",\n        "Furthermore, Tivimate allows users to schedule upcoming live broadcast recordings directly to external USB drives or network NAS storage, turning your streaming stick into a full-fledged cloud DVR set-top box."'
)

with open(apps_path, "w", encoding="utf-8") as f:
    f.write(c)

print("Top up completed.")
