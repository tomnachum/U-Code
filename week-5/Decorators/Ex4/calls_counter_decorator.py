from functools import wraps


def calls_counter(func):
    counter = 0

    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal counter
        func(*args, **kwargs)
        counter += 1
        print(counter)

    return inner
