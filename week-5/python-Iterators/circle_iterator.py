class CircleIter:
    def __init__(self, iterable, iterations):
        self.iterable = iterable
        self.iterations = iterations
        self.counter = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.counter >= self.iterations:
            raise StopIteration
        cur_index = self.counter % len(self.iterable)
        cur_element = self.iterable[cur_index]
        self.counter += 1
        return cur_element


for x in CircleIter([1, 2], 5):
    print(x, end=" ")
print()

for x in CircleIter([1, 2, 3], 4):
    print(x, end=" ")
    for y in CircleIter([5, 6], 3):
        print(y, end=" ")
    print("", end="\n")
print()
