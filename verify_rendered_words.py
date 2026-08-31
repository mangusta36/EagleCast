import os
import re

def count_object_rendered_words(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract all string literals in the file
    strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'', content)
    full_text = []
    for s1, s2 in strings:
        s = s1 or s2
        if not s.startswith("http") and not s.startswith("/images/") and not s.endswith(".webp") and not s.endswith(".jpg"):
            full_text.append(s)

    combined_prose = " ".join(full_text)
    words = re.findall(r'\b[A-Za-z0-9\'-]+\b', combined_prose)
    return len(words)

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"
for filename in ["tivimate-guide.ts", "apple-guide.ts", "error-fixing-guide.ts", "vpn-guide.ts", "apps-shootout.ts"]:
    path = os.path.join(posts_dir, filename)
    print(f"{filename}: {count_object_rendered_words(path)} total rendered words")
