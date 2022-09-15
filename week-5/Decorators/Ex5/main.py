from cache_decorator import cache


@cache
def fibonacci(n):
    print("calculating: ", n)
    if n == 0 or n == 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(2))
print(fibonacci(4))
