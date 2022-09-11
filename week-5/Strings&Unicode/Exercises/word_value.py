def get_word_value(word):
    return sum([ord(c)-96 for c in word])


print(get_word_value("day"))    # 4 + 1 + 25 = 30 