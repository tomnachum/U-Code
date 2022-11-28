def fib(n):
    if n < 1:
        return None
    if n == 1 or n == 2:
        return n - 1
    a, b, counter = 0, 1, 2
    while counter < n:
        a, b = b, a + b
        counter += 1
    return b
