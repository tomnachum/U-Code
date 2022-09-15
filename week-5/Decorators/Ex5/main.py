from cache_decorator import cache


@cache
def fibonacci(n):
    print("calculating: ", n)
    if n == 0 or n == 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(2))
print(fibonacci(4))


@cache
# Note: the * make the kwargs "mandatory kwargs", which mean we must pass them as a key value pair.
# https://www.youtube.com/watch?v=R8-oAqCgHag&ab_channel=mCoding
def add(x, *, addition=0, more=0):
    print("running  add")
    return x + 1 + addition + more


add(1, addition=0, more=0)
add(1, more=0, addition=0)
add(1, more=0)
add(1)
add(2)
add(1, addition=5)
add(1, addition=5, more=2)
add(1, addition=5, more=2)
