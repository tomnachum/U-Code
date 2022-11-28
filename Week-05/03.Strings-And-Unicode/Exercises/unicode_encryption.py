def encode(msg):
    code=''
    for c in msg:
        code+=str(ord(c))+ " "
    return code[:-1]

def decode(msg):
    code = msg.split(" ")
    decode = ""
    for unicode in code:
        decode+=chr(int(unicode))
    return decode

print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello" 