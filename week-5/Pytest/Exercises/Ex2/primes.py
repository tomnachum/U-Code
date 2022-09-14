def is_prime(number):
    for i in range(2, number):
        if (number % i) == 0:
            return False
    return True


def are_prime_numbers(*args):
    return all([is_prime(num) for num in args])
