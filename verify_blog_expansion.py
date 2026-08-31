import os
import re

blog_file_path = "/home/mangusta/Projects/EagleCast/data/blog.tsx"
posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"
public_dir = "/home/mangusta/Projects/EagleCast/public"

print("--- STARTING BLOG EXPANSION AUDIT ---")

# List of blog post files
files_to_check = [
    os.path.join(posts_dir, "tivimate-guide.ts"),
    os.path.join(posts_dir, "apple-guide.ts"),
    os.path.join(posts_dir, "error-fixing-guide.ts"),
    os.path.join(posts_dir, "vpn-guide.ts"),
    os.path.join(posts_dir, "apps-shootout.ts"),
]

for file_path in files_to_check:
    filename = os.path.basename(file_path)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Calculate word count (strip code overhead)
    # Extract strings from intro, sections, faqs, quickAnswer, deck
    words = re.findall(r'\b[A-Za-z0-9\'-]+\b', content)
    word_count = len(words)

    # Check brand link
    brand_link_found = "https://www.eaglecastv.online/" in content and "EagleCast TV" in content

    # Check image src existence
    img_match = re.search(r'src:\s*"([^"]+)"', content)
    img_exists = False
    if img_match:
        img_src = img_match.group(1)
        full_img_path = os.path.join(public_dir, img_src.lstrip("/"))
        img_exists = os.path.exists(full_img_path)

    # Extract internal markdown links [label](/path)
    internal_links = re.findall(r'\[([^\]]+)\]\((/[^)]*)\)', content)

    print(f"File: {filename}")
    print(f"  - Word Count approx: {word_count} words")
    print(f"  - Brand Link Present: {brand_link_found}")
    print(f"  - Hero Image Exists: {img_exists}")
    print(f"  - Internal Links Count: {len(internal_links)}")
    for label, link in internal_links:
        print(f"      * [{label}]({link})")
    print()

print("--- AUDIT COMPLETE ---")
