import time
from slow_down_decorator import slow_down


@slow_down
def my_func(x, y, z):
    return x + y + z


s = time.time()
my_func(1, 2, 3)
e = time.time()
print(e - s)
