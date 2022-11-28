import primes


def test_is_three_prime():
    assert primes.is_prime(3), "Test Failed! 3 is prime."


def test_five_six_seven():
    assert primes.are_prime_numbers(5, 6, 7) == False, "Test Failed! 6 is not prime."


def test_one():
    assert primes.is_prime(0), "Test Failed! 0 is prime?"
