def get_sum_of_squares(arr):
    return sum(
        list(map(lambda x: x**2, sorted(filter(lambda x: x % 2 == 0, arr))[-4:]))
    )


numbers = [2, 3, 55, 4, 6, 8, 43, 10]

print(get_sum_of_squares(numbers))
