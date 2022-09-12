def reversed_minus_first(tup):
    return tup[:0:-1]


print(reversed_minus_first((1, 2, 3)))
print(reversed_minus_first((2, 4, 6, 8, 10, 12)))


def reversed_minus_last(tup):
    return tup[-2::-1]


print(reversed_minus_last((1, 2, 3)))
print(reversed_minus_last((2, 4, 6, 8, 10, 12)))
