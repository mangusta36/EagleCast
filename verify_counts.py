import re
import json

with open('data/blog.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

def get_object_at_slug(slug):
    pos = text.find(slug)
    if pos == -1:
        raise ValueError(f"Slug '{slug}' not found")
    start = text.rfind('{', 0, pos)
    
    stack = 0
    in_str = False
    str_char = None
    escape = False
    
    for i in range(start, len(text)):
        c = text[i]
        if in_str:
            if escape:
                escape = False
            elif c == '\\':
                escape = True
            elif c == str_char:
                in_str = False
        else:
            if c in ('"', "'"):
                in_str = True
                str_char = c
            elif c == '{':
                stack += 1
            elif c == '}':
                stack -= 1
                if stack == 0:
                    return text[start:i+1]
    raise ValueError(f"Could not parse object for slug '{slug}'")

s1 = get_object_at_slug('iptv-playlist-formats-m3u-xtream-codes-guide')
s2 = get_object_at_slug('how-to-optimize-home-network-for-iptv-streaming')

def js_to_json(js_str):
    pattern = r'([{,]\s*)([a-zA-Z0-9_]+)\s*:'
    json_str = re.sub(pattern, r'\1"\2":', js_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    return json_str

obj1 = json.loads(js_to_json(s1))
obj2 = json.loads(js_to_json(s2))

def clean_markdown_links(s):
    if not isinstance(s, str):
        return ''
    return re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', s)

def count_words_in_string(s):
    cleaned = clean_markdown_links(s)
    tokens = [t for t in cleaned.strip().split() if t]
    return len(tokens)

def count_article_content(obj):
    total_words = 0

    def add_field(val):
        nonlocal total_words
        if not val:
            return
        if isinstance(val, str):
            total_words += count_words_in_string(val)
        elif isinstance(val, list):
            for item in val:
                if isinstance(item, str):
                    total_words += count_words_in_string(item)

    add_field(obj.get("title"))
    add_field(obj.get("deck"))
    add_field(obj.get("quickAnswer"))
    add_field(obj.get("intro"))

    if "sections" in obj and isinstance(obj["sections"], list):
        for sec in obj["sections"]:
            add_field(sec.get("title"))
            add_field(sec.get("paragraphs"))
            add_field(sec.get("bullets"))
            if "table" in sec and isinstance(sec["table"], dict):
                tbl = sec["table"]
                add_field(tbl.get("caption"))
                add_field(tbl.get("columns"))
                if "rows" in tbl and isinstance(tbl["rows"], list):
                    for row in tbl["rows"]:
                        add_field(row)
            if "cta" in sec and isinstance(sec["cta"], dict):
                cta = sec["cta"]
                add_field(cta.get("title"))
                add_field(cta.get("description"))
                add_field(cta.get("label"))

    if "faqs" in obj and isinstance(obj["faqs"], list):
        for faq in obj["faqs"]:
            add_field(faq.get("question"))
            add_field(faq.get("answer"))

    return total_words

w1 = count_article_content(obj1)
w2 = count_article_content(obj2)

print("ARTICLE 1")
print(f"Title: {obj1['title']}")
print(f"Final word count: {w1}")
print(f"Status: {'PASS' if w1 >= 2500 else 'FAIL'}")
print()
print("ARTICLE 2")
print(f"Title: {obj2['title']}")
print(f"Final word count: {w2}")
print(f"Status: {'PASS' if w2 >= 2500 else 'FAIL'}")
