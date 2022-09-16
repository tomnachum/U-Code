def reduce(func, iterable, initial=None):
    start = 1 if not initial else 0
    acc = iterable[0] if not initial else initial
    for i in range(start, len(iterable)):
        acc = func(acc, iterable[i])
    return acc
