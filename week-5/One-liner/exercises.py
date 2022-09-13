def is_palindrome(s):
    return s == s[::-1]


def reverse_word(sentence):
    return " ".join([word[::-1] for word in sentence.split(" ")])


def swap():
    x = 2
    y = 3
    x, y = y, x
    print(x, y)


def sum_even_items(arr):
    return sum(arr[1::2])


def duplicate(arr):
    return arr + arr


def change_spaces(s):
    return s.replace(" ", "@")


def number_of_spaces(s):
    return len([c for c in s if c == " "])


def number_of_all_spaces(s):
    return len([c for c in s if c.isspace()])


def largest_lexicographically(s):
    return max(s.replace(".", "").split(" "))


def longest_word(s):
    return max([len(word) for word in s.replace(".", "").split(" ")])


def reverse_senrence(s):
    return s[::-1]


def reverse_word_order(s):
    return " ".join((s.split(" ")[::-1]))


print(reverse_word_order("hello dear world"))
