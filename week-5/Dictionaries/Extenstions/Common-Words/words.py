from posixpath import split


def find_max(word_counter):
    max_counter = float("-inf")
    max_word = ""
    for w, c in word_counter.items():
        if c > max_counter:
            max_counter = c
            max_word = w
    return max_word


def get_5_common(text):
    word_counter = {}
    for word in text.split(" "):
        if word in word_counter:
            word_counter[word] += 1
        else:
            word_counter[word] = 1

    if len(word_counter) <= 5:
        return word_counter

    top_5_words = {}
    while len(top_5_words) < 5:
        max_word = find_max(word_counter)
        top_5_words[max_word] = word_counter[max_word]
        del word_counter[max_word]
    return top_5_words


print(get_5_common("1 1 1 2 2 3 3 4 4 5 5 6 6 6 6 6 "))
