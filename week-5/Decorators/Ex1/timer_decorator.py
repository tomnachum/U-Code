import time
from functools import wraps


def timer(func):
    @wraps(func)
    def inner(r):
        start = time.time()
        func(r)
        end = time.time()
        print(end - start)

    return inner
