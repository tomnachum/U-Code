def get_power_of(power):
    def base(x):
        return x**power

    return base


calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))  # 5^2 = 25
print(calc_power_of_2(7))  # 7^2 = 49
print(calc_power_of_4(2))  # 2^4 = 16
print(calc_power_of_4(3))  # 3^4 = 81
