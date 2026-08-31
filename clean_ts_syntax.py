import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix double quotes at string boundaries
        content = re.sub(r'""+', '"', content)
        content = re.sub(r'"\s*,\s*"', '",\n        "', content)
        content = content.replace('",",', '",')
        content = content.replace('",\n",', '",')
        content = content.replace(',,', ',')
        content = content.replace('",\n  ],', '",\n  ],')

        # Clean array syntax where trailing quotes might be duplicated
        content = re.sub(r'",\s*"\s*,', '",\n        ', content)
        content = re.sub(r'",\s*"\s*\]', '"\n  ]', content)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("TS files cleaned.")
