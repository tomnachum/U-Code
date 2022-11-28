import anagram
import pytest


@pytest.mark.parametrize(
    "str1, str2, isAnagram",
    [
        ("elbow", "below", True),
        ("meteor", "remote", True),
        ("act", "cat", True),
        ("bbb", "aaa", False),
    ],
)
def test_anagram(str1, str2, isAnagram):
    assert anagram.anagram(str1, str2) is isAnagram
