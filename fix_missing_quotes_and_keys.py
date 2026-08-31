import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

keys = [
    "slug", "title", "seoTitle", "excerpt", "deck", "category",
    "publishedAt", "updatedAt", "author", "readingTime", "metaDescription",
    "primaryKeyword", "quickAnswer", "id", "caption", "variant", "description",
    "href", "label", "question", "answer", "src", "alt", "photographer", "sourceUrl"
]

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        for k in keys:
            # Pattern matching key: unquoted_val
            pattern = r'(' + k + r':\s*)([^"\s\[\{\n][^\n,]*?)(,?\s*\n)'
            content = re.sub(pattern, r'\1"\2"\3', content)

        content = re.sub(r'""+', '"', content)
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Quotes and keys fixed.")
