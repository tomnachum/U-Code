# O(n^2)
from collections import Counter


def is_anagram(word1, word2):
    return Counter(word1) == Counter(word2)


def groupByAnagrams(words):
    groups = dict()
    for word in words:
        for representative in groups:
            if Counter(word) == Counter(representative):
                groups[representative].append(word)
                break
        else:
            groups[word] = [word]
    return list(groups.values())


# O(n)
from collections import defaultdict


def sort_by_letters(word):
    return "".join(sorted(word))


def groupByAnagramsImproved(words):
    equivalent_classes = defaultdict(lambda: set())
    for word in words:
        sorted_word = sort_by_letters(word)
        equivalent_classes[sorted_word].add(word)
    return list(equivalent_classes.values())


if __name__ == "__main__":
    print(groupByAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    print(groupByAnagramsImproved(["eat", "tea", "tan", "ate", "nat", "bat", "eat"]))
