import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix multiline string missing closing quotes
        # Replace `"\n "` or `.\n "` where quote was omitted
        # Regex search for: "([^"\\]*)\n\s*"([^"\\]*)"
        # Let's fix missing closing quotes before opening quotes
        content = re.sub(r'([^\s",])\n\s*"', r'\1",\n        "', content)
        content = re.sub(r'([^\s",])"\s*"', r'\1",\n        "', content)
        content = re.sub(r'""+', '"', content)
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Missing quotes fixed.")
