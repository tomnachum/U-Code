from collections import Counter


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


if __name__ == "__main__":
    print(groupByAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
