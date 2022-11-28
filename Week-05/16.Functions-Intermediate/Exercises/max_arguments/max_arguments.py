def max_arguments():
    max_args = 0

    def inner(*args):
        nonlocal max_args
        max_args = max(max_args, len(args))
        return max_args

    return inner


func = max_arguments()
print(func())  # 0
print(func(1, 2, 3, 7))  # 4
print(func(9, 2))  # 4
print(func(1, 2, 3, 4, 5))  # 5
