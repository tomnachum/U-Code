import time

SECONDS = 1


def slow_down(func):
    def inner(*args, **kwargs):
        time.sleep(SECONDS)
        func(*args, **kwargs)

    return inner
