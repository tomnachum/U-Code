def shift_char(c, n):
    if n < 0:
        n *= -1
        n = 26 - n % 26
    return chr((ord(c) - 65 + n) % 26 + 65)


def encode(msg, n):
    return "".join([shift_char(c, n) for c in msg])


def decode(msg, n):
    return "".join([shift_char(c, -n) for c in msg])


print(encode("ABXYZ", 3))  # "DEABC"
print(decode("DEABC", 3))  # "ABXYZ"
