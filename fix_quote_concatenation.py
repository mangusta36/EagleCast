import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix pattern: `", TEXT",` -> `",\n        "TEXT",`
        content = re.sub(r'",\s*([A-Za-z0-9][^"\n]*?)",', r'",\n        "\1",', content)
        content = re.sub(r'",\s*([A-Za-z0-9][^"\n]*?)"\n', r'",\n        "\1"\n', content)
        content = re.sub(r'""+', '"', content)
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Quote concatenation fixed.")
