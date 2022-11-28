from collections import Counter


def anagram(str1, str2):
    return Counter(str1) == Counter(str2)
