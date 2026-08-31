import re

file_path = "/home/mangusta/Projects/EagleCast/data/blog.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Update how-to-set-up-iptv-fire-tv relatedSlugs
content = content.replace(
    'slug: "how-to-set-up-iptv-fire-tv",',
    'slug: "how-to-set-up-iptv-fire-tv",'
)

# Replace specific relatedSlugs arrays
content = re.sub(
    r'(slug:\s*"how-to-set-up-iptv-fire-tv"[^}]*relatedSlugs:\s*\[)([^\]]+)(\])',
    r'\1\2, "tivimate-iptv-player-setup-guide", "best-iptv-apps-comparison-tivimate-smarters-xciptv"\3',
    content
)

content = re.sub(
    r'(slug:\s*"how-to-set-up-iptv-smart-tv"[^}]*relatedSlugs:\s*\[)([^\]]+)(\])',
    r'\1\2, "how-to-set-up-iptv-iphone-ipad-apple-tv", "best-iptv-apps-comparison-tivimate-smarters-xciptv"\3',
    content
)

content = re.sub(
    r'(slug:\s*"fix-iptv-buffering"[^}]*relatedSlugs:\s*\[)([^\]]+)(\])',
    r'\1\2, "ultimate-iptv-error-fixing-troubleshooting-guide", "do-you-need-vpn-for-iptv-isp-throttling-guide"\3',
    content
)

content = re.sub(
    r'(slug:\s*"best-devices-for-iptv"[^}]*relatedSlugs:\s*\[)([^\]]+)(\])',
    r'\1\2, "how-to-set-up-iptv-iphone-ipad-apple-tv", "tivimate-iptv-player-setup-guide"\3',
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated relatedSlugs in data/blog.tsx successfully.")
