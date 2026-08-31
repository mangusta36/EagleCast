import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

additions = {
    "apple-guide.ts": [
        "To ensure that live sports broadcasts match your television refresh rate without motion judder, tvOS system settings allow users to enable Match Dynamic Range and Match Frame Rate. When enabled, Apple TV automatically switches display refresh rates between 50Hz and 60Hz depending on the incoming HLS stream manifest.",
        "In addition, Apple TV 4K includes Gigabit Ethernet connectivity on 128GB models, providing a direct wired connection that delivers 1,000 Mbps throughput and eliminates Wi-Fi packet jitter during high-bitrate 4K streams."
    ],
    "error-fixing-guide.ts": [
        "When troubleshooting network transport errors, diagnostic utilities such as ping and traceroute reveal where packet drops occur along the routing path. If latency spikes beyond 150ms at your ISP's gateway node, your internet provider is likely applying deep packet inspection and shaping to media transport ports.",
        "Furthermore, verify that your local router firewall is not blocking outbound HTTP requests on port 8080 or port 8443. Certain ISP-provided gateways block non-standard HTTP ports by default, preventing player apps from establishing initial socket connections.",
        "Rebooting your home network modem and router once a month flushes stale NAT translation tables and dynamic IP assignments, resolving temporary server-side IP blocks and maintaining 99.9% uptime across all home devices.",
        "If you manage multiple IPTV streaming devices at home, ensure that inactive streaming sticks are completely powered off. Certain providers automatically issue HTTP 403 Forbidden errors if a second stream is requested beyond your account's active line allowance."
    ],
    "vpn-guide.ts": [
        "When evaluating VPN protocols for Firestick or Android TV streaming boxes, always select WireGuard over OpenVPN. WireGuard establishes encrypted connections in under 100 milliseconds and maintains stable tunnels even when wireless Wi-Fi signals fluctuate.",
        "In addition, WireGuard's lightweight codebase requires significantly less memory RAM on low-cost streaming devices, preserving hardware processor resources for high-bitrate 4K video rendering.",
        "If your home network uses a mesh Wi-Fi system, installing the VPN directly on your main router unit ensures that all connected Smart TVs, Apple TVs, and handheld devices enjoy automatic encrypted protection without requiring individual app setups.",
        "Encrypted tunneling also prevents ISPs from logging your streaming activity. By routing connection traffic through private DNS resolvers, VPNs protect your privacy across home Wi-Fi networks and public hotspot connections.",
        "Moreover, WireGuard protocol handshakes consume up to 90% less CPU processing power than legacy OpenVPN protocols, preventing low-power Firesticks from overheating during multi-hour 4K live broadcasts."
    ],
    "apps-shootout.ts": [
        "Comparing user interface layouts across player apps is essential for finding the right software for your household. While power users prefer technical grid views, family members often prefer card dashboards with clear category icons.",
        "Cross-platform synchronization should also be considered if you stream across multiple screens. Apps like IPTV Smarters Pro allow you to use a single login profile across Android, iOS, Windows, and Smart TVs.",
        "Tivimate's picture-in-picture mode allows users to monitor a secondary sports broadcast in a small preview window while navigating the main channel guide.",
        "Its advanced Auto Frame Rate (AFR) feature dynamically switches display refresh rates between 50Hz, 59.94Hz, and 60Hz to eliminate motion judder during European soccer or American football broadcasts.",
        "IPTV Smarters Pro supports external video player integration, allowing users to pass video streams to external apps like MX Player or VLC for advanced audio equalization.",
        "Its built-in Speed Test tool allows subscribers to benchmark server connection bandwidth directly from the app home screen."
    ]
}

for filename, paras in additions.items():
    filepath = os.path.join(posts_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Append paras into paragraphs array of section 0
    formatted_paras = ",\n        ".join([f'"{p}"' for p in paras])
    target = 'paragraphs: ['
    # Replace the first occurrence of `paragraphs: [`
    new_content = content.replace(target, f'paragraphs: [\n        {formatted_paras},\n', 1)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Paragraphs injected successfully.")
