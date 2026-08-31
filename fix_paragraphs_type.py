import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix pattern: replace paragraphs_2: [\n "..." \n], with appending paragraphs
        # Replace `paragraphs_2:` with merging or placing into paragraphs array
        # Let's inspect where paragraphs_2 occurs and merge it into paragraphs array
        def repl(match):
            # match.group(1) is the paragraphs content inside array
            # match.group(2) is bullets or cta content
            # match.group(3) is paragraphs_2 content inside array
            p1 = match.group(1).rstrip()
            p2 = match.group(3).strip()
            rest = match.group(2)
            return f'paragraphs: [\n{p1},\n{p2}\n  ],\n{rest}'

        pattern = r'paragraphs:\s*\[([\s\S]*?)\]\s*,\s*([\s\S]*?)paragraphs_2:\s*\[([\s\S]*?)\]\s*,'
        new_content = re.sub(pattern, repl, content)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

print("Paragraphs fixed.")
