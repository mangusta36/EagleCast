import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix `key: ","\n "value"` -> `key: "value"`
        pattern = r'([a-zA-Z0-9_]+):\s*",?"\s*\n\s*"([^"\\]*(?:\\.[^"\\]*)*)"'
        content = re.sub(pattern, r'\1: "\2"', content)

        # Fix author: "editorialAuthor" -> author: editorialAuthor
        content = content.replace('author: "editorialAuthor"', 'author: editorialAuthor')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Corrupted key strings fixed.")
