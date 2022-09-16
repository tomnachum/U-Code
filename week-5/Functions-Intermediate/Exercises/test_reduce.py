from reduce import reduce


def sum(acc, cur):
    return acc + cur


def mul(acc, cur):
    return acc * cur


def test_sum():
    assert reduce(sum, [1, 2, 3]) == 6
    assert reduce(sum, [1, 1, 1, 1, 1, 1, 1, 1]) == 8


def test_mul():
    assert reduce(mul, [1, 2, 3, 4, 5]) == 120
    assert reduce(mul, [1, 2, 3, 4, 5], 0.5) == 60
