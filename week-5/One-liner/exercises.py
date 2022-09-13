def is_palindrome(s):
    return s == s[::-1]


def reverse_word(sentence):
    return " ".join([word[::-1] for word in sentence.split(" ")])


# print(reverse_word("hello world"))
# print(reverse_word("my name is Tom 3435"))


def swap():
    x = 2
    y = 3
    x, y = y, x
    print(x, y)


def sum_even_items(arr):
    return sum(arr[1::2])


# print(sum_even_items([1, 2, 1, 3, 1]))


def duplicate(arr):
    return arr + arr


# print(duplicate([1, 2, 3]))


def change_spaces(s):
    return s.replace(" ", "@")


# print(change_spaces("You got it"))


def number_of_spaces(s):
    return len([c for c in s if c == " "])


# print(number_of_spaces("my name is what     "))


def number_of_all_spaces(s):
    return len([c for c in s if c.isspace()])


print(number_of_spaces("my name is what     "))
