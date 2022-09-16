def reduce(func, iterable, initial=None):
    start, acc = 1, iterable[0] if not initial else 0, initial
    for i in range(start, len(iterable)):
        acc = func(acc, iterable[i])
    return acc
