from turtle import width


class Rectangle:
    def __init__(self, width, height) -> None:
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def calculate_perimeter(self):
        return 2 * self.height + 2 * self.width


class Square(Rectangle):
    def __init__(self, length) -> None:
        super().__init__(length, length)

    def calculate_perimeter(self):
        return 4 * self.height


s = Square(2)
print(s.calculate_perimeter())  # outputs: 8
print(s.calculate_area())  # outputs: 4
