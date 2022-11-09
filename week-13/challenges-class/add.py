def wrapper():
    num1 = 0

    def add(num2):
        nonlocal num1
        sum = num1 + num2
        num1 = num2
        return sum

    return add


if __name__ == "__main__":
    add = wrapper()
    print(add(3))
    print(add(1))
    print(add(2))
    print(add(2))
    print(add(8))
