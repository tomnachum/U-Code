from timer_decorator import timer


@timer
def sum_in_range(r):
    sum = 0
    for i in range(r):
        sum += i
    return sum


sum_in_range(10000000)
sum_in_range(50000000)
