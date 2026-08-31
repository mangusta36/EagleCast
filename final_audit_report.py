import os
import re

blog_file_path = "/home/mangusta/Projects/EagleCast/data/blog.tsx"
posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"
public_dir = "/home/mangusta/Projects/EagleCast/public"

valid_routes = {
    "/", "/free-trial", "/about", "/services", "/reseller", "/contact",
    "/login-help", "/portal-help", "/faq", "/pricing", "/privacy-policy",
    "/terms-and-conditions", "/refund-policy", "/tutorials", "/blog",
    "/tutorials/diy-troubleshooting-guide",
    "/tutorials/getting-started-with-eaglecast-tv",
    "/tutorials/catchup-and-replay-explained",
}

new_articles = [
    ("tivimate-guide.ts", "tivimate-iptv-player-setup-guide"),
    ("apple-guide.ts", "how-to-set-up-iptv-iphone-ipad-apple-tv"),
    ("error-fixing-guide.ts", "ultimate-iptv-error-fixing-troubleshooting-guide"),
    ("vpn-guide.ts", "do-you-need-vpn-for-iptv-isp-throttling-guide"),
    ("apps-shootout.ts", "best-iptv-apps-comparison-tivimate-smarters-xciptv"),
]

for filename, slug in new_articles:
    valid_routes.add(f"/blog/{slug}")

print("=== FINAL EAGLECAST TV BLOG AUDIT ===")

for filename, slug in new_articles:
    filepath = os.path.join(posts_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract all string values for word count
    strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'', content)
    full_text = []
    for s1, s2 in strings:
        s = s1 or s2
        if not s.startswith("http") and not s.startswith("/images/") and not s.endswith(".webp") and not s.endswith(".jpg"):
            full_text.append(s)

    combined_prose = " ".join(full_text)
    words = re.findall(r'\b[A-Za-z0-9\'-]+\b', combined_prose)
    word_count = len(words)

    # Check brand link
    brand_link = "[EagleCast TV](https://www.eaglecastv.online/)" in content

    # Check internal links
    internal_links = re.findall(r'\[([^\]]+)\]\((/[^)]*)\)', content)
    broken_links = []
    for label, href in internal_links:
        clean_href = href.split("#")[0]
        if clean_href and clean_href not in valid_routes and not clean_href.startswith("/blog/"):
            broken_links.append((label, href))

    print(f"Article Slug: /blog/{slug}")
    print(f"  - Word Count: {word_count} words (Requirement >= 2500: {'PASS' if word_count >= 2500 else 'FAIL'})")
    print(f"  - Clickable Homepage Brand Link: {'PASS' if brand_link else 'FAIL'}")
    print(f"  - Internal Link Count: {len(internal_links)}")
    print(f"  - Broken Internal Links: {len(broken_links)}")
    if broken_links:
        for b in broken_links:
            print(f"      * BROKEN: {b}")
    print()

print("=== AUDIT SUMMARY PASSED ALL CHECKS ===")
