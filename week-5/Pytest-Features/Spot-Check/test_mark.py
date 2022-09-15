import pytest


def sum(a, b):
    return a + b


def test_1():
    assert sum(1, 2) == 3


def test_2():
    assert sum(3, 5) == 7


@pytest.mark.low3
def test_3():
    assert sum(1, 1) == 2


@pytest.mark.low3
def test_4():
    assert sum(0, 1) == 2
