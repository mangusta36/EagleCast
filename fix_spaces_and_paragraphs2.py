import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix missing space after property colons
        content = re.sub(r'([a-zA-Z0-9_]+):"', r'\1: "', content)
        content = re.sub(r'([a-zA-Z0-9_]+):\{', r'\1: {', content)
        content = re.sub(r'([a-zA-Z0-9_]+):\[', r'\1: [', content)

        # Merge paragraphs_2 into paragraphs
        def repl(match):
            p1 = match.group(1).rstrip()
            p2 = match.group(3).strip()
            rest = match.group(2)
            return f'paragraphs: [\n{p1},\n{p2}\n  ],\n{rest}'

        pattern = r'paragraphs:\s*\[([\s\S]*?)\]\s*,\s*([\s\S]*?)paragraphs_2:\s*\[([\s\S]*?)\]\s*,'
        content = re.sub(pattern, repl, content)

        # Clean trailing commas or empty quotes
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Spaces and paragraphs_2 fixed.")
