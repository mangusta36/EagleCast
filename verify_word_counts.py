import os
import re

posts_dir = "/home/mangusta/Projects/EagleCast/data/blog-posts"

def count_prose_in_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    # Extract all double-quoted and backtick strings that are content
    # Or extract contents between quotes in paragraphs, bullets, intro, faqs, etc.
    # A simple regex for string literals:
    strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', text)
    prose = " ".join(s for s in strings if len(s) > 10 and not s.startswith("/") and not s.startswith("http"))
    words = re.findall(r'\b[A-Za-z0-9\'-]+\b', prose)
    return len(words)

for filename in ["tivimate-guide.ts", "apple-guide.ts", "error-fixing-guide.ts", "vpn-guide.ts", "apps-shootout.ts"]:
    path = os.path.join(posts_dir, filename)
    print(f"{filename}: {count_prose_in_file(path)} prose words")
