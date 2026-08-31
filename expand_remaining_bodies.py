import os

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

# Expand apple-guide.ts
apple_path = os.path.join(posts_dir, "apple-guide.ts")
with open(apple_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'Step 6: Navigate to Settings > Player Selection and set Live TV player engine to \'AVPlayer\' for native 60fps hardware acceleration.',
    'Step 6: Navigate to Settings > Player Selection and set Live TV player engine to \'AVPlayer\' for native 60fps hardware acceleration.\n        "Step 7: In Smarters Pro settings, enable \'Auto Sync EPG on App Launch\' to keep guide listings accurate without manual updates.",\n        "Step 8: If using Apple TV in a multi-room setup, enable \'Save Favorites to iCloud\' so your custom channel lists sync automatically to secondary screens.",'
)

c = c.replace(
    'Step 6: Open Player Settings and enable \'Auto Reconnect\' to handle minor Wi-Fi drops automatically.',
    'Step 6: Open Player Settings and enable \'Auto Reconnect\' to handle minor Wi-Fi drops automatically.\n        "Step 7: Navigate to Subtitle Settings and choose UTF-8 character encoding to prevent garbled text on international movie subtitles.",\n        "Step 8: Configure buffer length to 3 seconds under Network Settings to stabilize live sports streams during evening hours.",'
)

c = c.replace(
    'Step 5: Customize category carousels on the main screen to surface live sports channels directly on launch.',
    'Step 5: Customize category carousels on the main screen to surface live sports channels directly on launch.\n        "Step 6: Configure parental control PIN codes under IPTVX settings to restrict adult channel categories across all family devices.",\n        "Step 7: Enable iCloud synchronization to automatically share watch history and marked favorite movies between iPhone and Apple TV.",'
)

with open(apple_path, "w", encoding="utf-8") as f:
    f.write(c)


# Expand error-fixing-guide.ts
error_path = os.path.join(posts_dir, "error-fixing-guide.ts")
with open(error_path, "r", encoding="utf-8") as f:
    c = f.read()

# Add extra paragraphs in Error 1, Error 2, Error 3, Error 4, Error 5, Error 6, Error 7, Error 8
c = c.replace(
    'Fix Protocol: Re-enter your credentials manually. Check your account status in our [login help guide](/login-help) or contact [EagleCast TV customer support](/contact) to verify active credentials.',
    'Fix Protocol: Re-enter your credentials manually. Check your account status in our [login help guide](/login-help) or contact [EagleCast TV customer support](/contact) to verify active credentials.\n        "Additional Verification: If you manage multiple IPTV devices at home, ensure that inactive streaming sticks are completely powered off. Certain providers automatically issue HTTP 403 Forbidden errors if a second stream is requested beyond your active line limit.",\n        "If your subscription provider uses MAC address binding, verify that your device\'s Wi-Fi and Ethernet MAC addresses are registered correctly. Modern streaming boxes assign separate MAC addresses to Wi-Fi and wired Ethernet ports.",'
)

c = c.replace(
    'Fix Step 3: Test the M3U or Server URL in a browser on your phone to confirm the URL is active.',
    'Fix Step 3: Test the M3U or Server URL in a browser on your phone to confirm the URL is active.\n        "Fix Step 4: Verify that your local router firewall is not blocking outbound HTTP requests on port 8080 or port 8443. Certain ISP-provided gateways block non-standard HTTP ports by default.",\n        "Fix Step 5: Reboot your home network modem and router for 60 seconds to force your ISP to issue a fresh dynamic IP address, resolving temporary server-side IP blocks.",'
)

c = c.replace(
    'To understand how EPG guide feeds are structured, read our detailed guide on [what is IPTV EPG](/blog/what-is-iptv-epg).',
    'To understand how EPG guide feeds are structured, read our detailed guide on [what is IPTV EPG](/blog/what-is-iptv-epg).\n        "Furthermore, verify that your player app\'s EPG time offset matches your local timezone. If guide listings are offset by 5 hours, channels will display \'No Information\' during times when program schedules are blank.",\n        "If your device has less than 500 MB of free storage, clear cached thumbnail images and uninstall unused apps. Player applications fail to write XMLTV data to storage if local disk capacity is exhausted.",'
)

c = c.replace(
    'Solution C — Disable Pass-Through Audio: If using an external soundbar or AV receiver, disable HDMI Audio Pass-Through in your Firestick or TV system settings and select \'Stereo PCM\'.',
    'Solution C — Disable Pass-Through Audio: If using an external soundbar or AV receiver, disable HDMI Audio Pass-Through in your Firestick or TV system settings and select \'Stereo PCM\'.\n        "Solution D — Adjust Refresh Rate: Ensure your TV\'s Auto Frame Rate (AFR) setting matches the broadcast refresh rate (e.g. 50Hz for PAL broadcasts, 60Hz for NTSC). Refresh rate mismatches cause lip-sync drift during live sports broadcasts.",\n        "Solution E — Clear Audio Decoder Cache: Force stop your player app and clear cache in system settings to reset hardware audio decoders.",'
)

with open(error_path, "w", encoding="utf-8") as f:
    f.write(c)


# Expand vpn-guide.ts
vpn_path = os.path.join(posts_dir, "vpn-guide.ts")
with open(vpn_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'When credentials or playlist authentication fail over unencrypted networks, consult our [login help portal](/login-help) for step-by-step guidance on updating server IP parameters within your player app.',
    'When credentials or playlist authentication fail over unencrypted networks, consult our [login help portal](/login-help) for step-by-step guidance on updating server IP parameters within your player app.\n        "Encrypted tunneling also prevents ISPs from logging your streaming activity. By routing connection traffic through private DNS resolvers, VPNs protect your privacy across home Wi-Fi networks.",\n        "Moreover, WireGuard protocol handshakes consume up to 90% less CPU processing power than legacy OpenVPN protocols, preventing low-power Firesticks from overheating during multi-hour 4K live broadcasts.",'
)

c = c.replace(
    'Selecting a VPN with dedicated streaming servers located in your regional country ensures that latency remains under 20 milliseconds, providing instant channel zapping.',
    'Selecting a VPN with dedicated streaming servers located in your regional country ensures that latency remains under 20 milliseconds, providing instant channel zapping.\n        "When testing VPN providers, ensure they support 10 Gbps server node connections to prevent server-side congestion during high-profile sporting events like the Olympics or World Cup.",\n        "Furthermore, check whether your VPN provider offers a dedicated Amazon Fire TV app. Native TV apps allow you to control VPN connections using your standard Firestick remote without requiring a mouse pointer app.",'
)

c = c.replace(
    'Step 5: Click Connect. Once the VPN icon displays \'Connected\', launch your IPTV app (Tivimate, Smarters, etc.) and enjoy buffer-free streaming.',
    'Step 5: Click Connect. Once the VPN icon displays \'Connected\', launch your IPTV app (Tivimate, Smarters, etc.) and enjoy buffer-free streaming.\n        "Step 6: Enable \'Kill Switch\' in VPN settings to automatically block internet traffic if your VPN drops, preventing unencrypted stream leaks.",\n        "Step 7: Set \'Auto-Connect on Boot\' so your streaming stick connects to the VPN immediately when powered on.",'
)

with open(vpn_path, "w", encoding="utf-8") as f:
    f.write(c)


# Expand apps-shootout.ts
apps_path = os.path.join(posts_dir, "apps-shootout.ts")
with open(apps_path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'If you want to test how these player applications perform on your hardware before purchasing a long-term plan, request a [free 24-hour trial playlist](/free-trial) to verify stream stability.',
    'If you want to test how these player applications perform on your hardware before purchasing a long-term plan, request a [free 24-hour trial playlist](/free-trial) to verify stream stability.\n        "Comparing user interface layouts across player apps is essential for finding the right software for your household. While power users prefer technical grid views, family members often prefer card dashboards with clear category icons.",\n        "Cross-platform synchronization should also be considered if you stream across multiple screens. Apps like IPTV Smarters Pro allow you to use a single login profile across Android, iOS, Windows, and Smart TVs.",'
)

c = c.replace(
    'Power users can also configure Tivimate to back up entire playlist settings and channel favorites to Google Drive or local SMB network drives for easy deployment across secondary household TVs.',
    'Power users can also configure Tivimate to back up entire playlist settings and channel favorites to Google Drive or local SMB network drives for easy deployment across secondary household TVs.\n        "Tivimate\'s picture-in-picture mode allows users to monitor a secondary sports broadcast in a small preview window while navigating the main channel guide.",\n        "Its advanced Auto Frame Rate (AFR) feature dynamically switches display refresh rates between 50Hz, 59.94Hz, and 60Hz to eliminate motion judder during European soccer or American football broadcasts.",'
)

c = c.replace(
    'If you encounter missing credentials or login parameter errors when configuring Smarters Pro, review our [login help tutorial](/login-help).',
    'If you encounter missing credentials or login parameter errors when configuring Smarters Pro, review our [login help tutorial](/login-help).\n        "IPTV Smarters Pro supports external video player integration, allowing users to pass video streams to external apps like MX Player or VLC for advanced audio equalization.",\n        "Its built-in Speed Test tool allows subscribers to benchmark server connection bandwidth directly from the app home screen.",'
)

with open(apps_path, "w", encoding="utf-8") as f:
    f.write(c)

print("Remaining bodies expanded.")
