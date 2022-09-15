import pytest
import fibonacci_sequence


@pytest.mark.parametrize(
    "index, fib",
    [(1, 0), (2, 1), (3, 1), (4, 2), (5, 3), (6, 5), (14, 233), (58, 365435296162)],
)
def test_fib(index, fib):
    assert fibonacci_sequence.fib(index) == fib
