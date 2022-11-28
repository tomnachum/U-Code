def to_upper(c):
    return chr(ord(c)-32) if 97<=ord(c)<=122 else c

def upper(s):
    return ''.join([to_upper(c) for c in s])

print(upper("Hello World!!!"))