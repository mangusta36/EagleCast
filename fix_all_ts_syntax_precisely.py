import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix quotes around property names like `"excerpt:"` -> `excerpt:`
        content = re.sub(r'"([a-zA-Z0-9_]+):"', r'\1:', content)
        content = re.sub(r"'([a-zA-Z0-9_]+):'", r'\1:', content)

        # Fix array elements that lost opening quotes before property names
        # e.g., `paragraphs: [",` -> `paragraphs: [`
        content = content.replace('paragraphs: [",', 'paragraphs: [')
        content = content.replace('intro: [",', 'intro: [')
        content = content.replace('bullets: [",', 'bullets: [')
        content = content.replace('relatedSlugs: [",', 'relatedSlugs: [')

        # Clean trailing quote artifacts
        content = re.sub(r'""+', '"', content)
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("TS syntax precision fix complete.")
