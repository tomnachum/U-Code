code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y",
}

encrypted_message = "82705145106"

print(list(map(lambda l: code[l], encrypted_message)))
print([code[l] for l in encrypted_message])
