import time
from functools import wraps

SECONDS = 1


def slow_down(func):
    @wraps(func)
    def inner(*args, **kwargs):
        time.sleep(SECONDS)
        func(*args, **kwargs)

    return inner
