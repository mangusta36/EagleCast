import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

single_string_keys = ["excerpt", "deck", "seoTitle", "metaDescription", "quickAnswer", "title", "primaryKeyword"]

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        for key in single_string_keys:
            # Check if key: [\n "text" \n] occurred
            pattern = re.compile(rf'{key}:\s*\[\s*([\s\S]*?)\s*\]\s*,')
            def replacer(m):
                raw = m.group(1)
                # extract text inside quotes
                strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'', raw)
                joined = " ".join([s1 or s2 for s1, s2 in strings])
                return f'{key}: "{joined}",'
            content = pattern.sub(replacer, content)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Single string properties fixed.")
