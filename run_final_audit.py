import os
import re

blog_posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"
blog_main_file = "/home/mangusta/Projects/EagleCast/data/blog.tsx"
public_dir = "/home/mangusta/Projects/EagleCast/public"

valid_routes = {
    "/", "/free-trial", "/about", "/services", "/reseller", "/contact",
    "/login-help", "/portal-help", "/faq", "/pricing", "/privacy-policy",
    "/terms-and-conditions", "/refund-policy", "/tutorials", "/blog",
    "/tutorials/diy-troubleshooting-guide",
    "/tutorials/getting-started-with-eaglecast-tv",
    "/tutorials/catchup-and-replay-explained",
    "/blog/what-is-iptv",
    "/blog/iptv-vs-cable-streaming",
    "/blog/best-devices-for-iptv",
    "/blog/how-to-set-up-iptv-smart-tv",
    "/blog/how-to-set-up-iptv-fire-tv",
    "/blog/fix-iptv-buffering",
    "/blog/internet-speed-for-iptv",
    "/blog/what-is-iptv-epg",
    "/blog/iptv-reseller-guide",
    "/blog/how-to-choose-iptv-provider",
    "/blog/iptv-playlist-formats-m3u-xtream-codes-guide",
    "/blog/how-to-optimize-home-network-for-iptv-streaming",
    "/blog/tivimate-iptv-player-setup-guide",
    "/blog/how-to-set-up-iptv-iphone-ipad-apple-tv",
    "/blog/ultimate-iptv-error-fixing-troubleshooting-guide",
    "/blog/do-you-need-vpn-for-iptv-isp-throttling-guide",
    "/blog/best-iptv-apps-comparison-tivimate-smarters-xciptv",
}

new_articles = [
    ("tivimate-guide.ts", "tivimate-iptv-player-setup-guide"),
    ("apple-guide.ts", "how-to-set-up-iptv-iphone-ipad-apple-tv"),
    ("error-fixing-guide.ts", "ultimate-iptv-error-fixing-troubleshooting-guide"),
    ("vpn-guide.ts", "do-you-need-vpn-for-iptv-isp-throttling-guide"),
    ("apps-shootout.ts", "best-iptv-apps-comparison-tivimate-smarters-xciptv"),
]

print("================ EAGLECAST TV FINAL AUDIT SCRIPT ================")

ai_cliches = [
    r"in today's digital (world|landscape|era)",
    r"whether you're a",
    r"in conclusion",
    r"it's important to note",
    r"delve into",
    r"game-changer",
    r"navigating the",
    r"testament to",
    r"tapestry of",
]

for filename, slug in new_articles:
    filepath = os.path.join(blog_posts_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract pure body text (intro + section paragraphs + section bullets)
    # Exclude title, seoTitle, metaDescription, CTA titles, FAQs, sources
    intro_matches = re.findall(r'intro:\s*\[([\s\S]*?)\]\s*,', content)
    paragraphs_matches = re.findall(r'paragraphs:\s*\[([\s\S]*?)\]\s*,', content)
    bullets_matches = re.findall(r'bullets:\s*\[([\s\S]*?)\]\s*,', content)

    body_strings = []
    for match in intro_matches + paragraphs_matches + bullets_matches:
        str_literals = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'', match)
        for s1, s2 in str_literals:
            s = s1 or s2
            if len(s) > 5 and not s.startswith("http") and not s.startswith("/"):
                body_strings.append(s)

    body_text = " ".join(body_strings)
    body_words = re.findall(r'\b[A-Za-z0-9\'-]+\b', body_text)
    body_word_count = len(body_words)

    # Check AI cliches
    cliches_found = []
    for pattern in ai_cliches:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            cliches_found.append(pattern)

    # Check brand link
    has_brand_link = "[EagleCast TV](https://www.eaglecastv.online/)" in content

    # Check image file
    img_match = re.search(r'src:\s*"([^"]+)"', content)
    img_path = img_match.group(1) if img_match else ""
    img_exists = os.path.exists(os.path.join(public_dir, img_path.lstrip("/"))) if img_path else False

    # Check internal links
    internal_links = re.findall(r'\[([^\]]+)\]\((/[^)]*)\)', content)
    broken_links = [h for l, h in internal_links if h.split("#")[0] not in valid_routes]

    print(f"Article: /blog/{slug}")
    print(f"  - Pure Body Word Count: {body_word_count} (>=2500: {'PASS' if body_word_count >= 2500 else 'FAIL'})")
    print(f"  - AI Writing Cliches Found: {cliches_found if cliches_found else 'None (Clean)'}")
    print(f"  - Clickable Brand Link: {'PASS' if has_brand_link else 'FAIL'}")
    print(f"  - Featured Image ({img_path}): {'PASS' if img_exists else 'FAIL'}")
    print(f"  - Internal Links Count: {len(internal_links)} (Broken: {len(broken_links)})")
    print()

print("================ AUDIT COMPLETED ================")
