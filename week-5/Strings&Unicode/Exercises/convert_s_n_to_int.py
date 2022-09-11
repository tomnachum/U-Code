def string_number_to_int(s):
    num = 0
    factor = 1
    for c in s[::-1]:
        if not 48 <= ord(c) <= 57:
            return "Not a number"
        digit = ord(c) - 48
        num += digit * factor
        factor *= 10
    return num


print(type(string_number_to_int("10")), string_number_to_int("10"))  # output: 10
print(type(string_number_to_int("123")), string_number_to_int("123"))  # output: 123
print(type(string_number_to_int("99")), string_number_to_int("99"))  # output: 99
print(type(string_number_to_int("ABC")), string_number_to_int("ABC"))
