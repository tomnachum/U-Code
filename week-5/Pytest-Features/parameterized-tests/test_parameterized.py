import pytest


@pytest.mark.parametrize("num1, num2, sum", [(1, 2, 3), (1, 2, 12)])
def test_sum(num1, num2, sum):
    assert num1 + num2 == sum, "Got error in test_sum!"
