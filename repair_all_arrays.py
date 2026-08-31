import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        content = content.replace('[\",', '[')
        content = content.replace('[",', '[')
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Arrays repaired.")
