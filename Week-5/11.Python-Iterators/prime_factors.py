def is_prime(number):
    for i in range(2, number):
        if (number % i) == 0:
            return False
    return True


# Assume that num is positive integer
def get_prime_factors_generator(num):
    i = 2
    while num > 1:
        if is_prime(i) and num % i == 0:
            yield i
            num /= i
        else:
            i += 1


for x in get_prime_factors_generator(1):
    print(x)
