def my_accumulate(iterable):
    sum = 0
    for num in iterable:
        sum += num
        yield sum


# Test
for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)


# 1
# 3
# 6
# 10
# 15
