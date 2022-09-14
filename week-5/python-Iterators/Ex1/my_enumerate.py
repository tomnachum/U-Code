def my_enumerate(iterable, start=0):
    for i in range(len(iterable)):
        yield i + start, iterable[i]


# Tests
for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem)

# 0 10
# 1 20
# 2 30
# 3 40

for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)

# 10 10
# 11 20
# 12 30
# 13 40
