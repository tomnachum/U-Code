my_list = ["I", 2, "Love", 4, 56, "Coding", "Python", "in", [8, 9, 10]]


def test_number():
    assert (
        3 not in my_list
    ), "Test Failed! 3 is not in list"  # Should assert if number 3 is in my_list
    assert (
        56 in my_list
    ), "Test Failed! 56 is in list"  # Should assert if number 56 is in my_list


def test_str():
    assert (
        "I" in my_list and "Love" in my_list and "Coding" in my_list
    ), "Test Failed! all of it in my list"  # Should assert if "I", "Love" and "Coding" are in my_list


def test_upper_str():
    assert (
        all(s.isupper() for s in my_list if type(s) == str) == False
    ), "Test Failed! not all strings in list is uppercased"  # Should assert if all the strings in my_list are in upper case


def test_negative():
    assert (
        6 not in my_list
    ), "Test Failed! 6 is not in list"  # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
