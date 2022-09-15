import time


def timer(func):
    def inner(r):
        start = time.time()
        func(r)
        end = time.time()
        print(end - start)

    return inner
