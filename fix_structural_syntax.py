import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix key syntax like quickAnswer:", -> quickAnswer:
        content = re.sub(r'([a-zA-Z0-9_]+):\s*"\s*,', r'\1:', content)
        content = re.sub(r'([a-zA-Z0-9_]+):\s*"', r'\1:', content)
        # Restore correct string property lines
        content = re.sub(r'quickAnswer:\s*"\s*"', 'quickAnswer:\n        "', content)

        # Fix section array placement: `],\n,\n    {` -> `,\n    {`
        content = re.sub(r'\]\s*,\s*,\s*\{', ',\n    {', content)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Structural syntax fixed.")
