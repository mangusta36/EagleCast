import os

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

fields = [
    "slug", "title", "seoTitle", "excerpt", "deck", "category",
    "publishedAt", "updatedAt", "author", "readingTime", "metaDescription",
    "primaryKeyword", "quickAnswer", "id", "caption", "variant", "description",
    "href", "label", "question", "answer", "src", "alt", "photographer", "sourceUrl"
]

for filename in os.listdir(posts_dir):
    if filename.endswith(".ts"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()

        new_lines = []
        for line in lines:
            stripped = line.strip()
            fixed = line
            for field in fields:
                if stripped.startswith(f"{field}:"):
                    val_part = stripped[len(field) + 1:].strip()
                    if not val_part.startswith('"') and not val_part.startswith('[') and not val_part.startswith('{'):
                        # Wrap value in quotes
                        val_clean = val_part.rstrip(',')
                        val_clean = val_clean.strip('"')
                        indent = line[:line.find(field)]
                        has_comma = stripped.endswith(',')
                        fixed = f'{indent}{field}: "{val_clean}"' + (',' if has_comma else '') + '\n'
                        break
            new_lines.append(fixed)

        with open(filepath, "w", encoding="utf-8") as f:
            f.writelines(new_lines)

print("Exact property values fixed.")
