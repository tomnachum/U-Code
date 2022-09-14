def foo():
    return 1


def test_fail():
    assert foo() == 0, "Test Failed! Should be 0"


def test_success():
    assert foo() == 1, "Test Failed! Should be 1"
