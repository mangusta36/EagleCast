import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

keys = [
    "slug", "title", "seoTitle", "excerpt", "deck", "category",
    "publishedAt", "updatedAt", "author", "readingTime", "metaDescription",
    "primaryKeyword", "featuredImage", "quickAnswer", "intro", "sections",
    "faqs", "sources", "relatedSlugs", "id", "paragraphs", "bullets",
    "table", "cta", "caption", "columns", "rows", "variant", "description",
    "href", "label", "question", "answer", "src", "alt", "photographer",
    "sourceUrl"
]

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Replace quoted keys `"excerpt:"` with `excerpt:`
        for k in keys:
            content = re.sub(rf'"{k}":', f'{k}:', content)
            content = re.sub(rf"'{k}':", f'{k}:', content)

        # Fix double quotes inside array strings
        content = content.replace('",",', '",')
        content = content.replace(',,', ',')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Keys restored.")
