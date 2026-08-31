import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

fields = ["answer", "question", "label", "href", "caption", "title", "id", "description", "slug", "seoTitle", "excerpt", "deck", "category", "publishedAt", "updatedAt", "author", "readingTime", "metaDescription", "primaryKeyword", "quickAnswer", "src", "alt", "photographer", "sourceUrl", "variant"]

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        for field in fields:
            # Match `field:Text`, (unquoted value)
            pattern = re.compile(rf'{field}:\s*([A-Za-z0-9][^\n"]*?)(,?\s*\n)')
            def replace_val(m):
                val = m.group(1).rstrip(',')
                end = m.group(2)
                if not val.endswith('"'):
                    val = val + '"'
                return f'{field}: "{val}{end}'
            content = pattern.sub(replace_val, content)

        # Fix double quotes inside array strings if any `""`
        content = re.sub(r'""+', '"', content)
        content = content.replace('",",', '",')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Unquoted values fixed.")
