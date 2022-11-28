from calls_counter_decorator import calls_counter


@calls_counter
def my_print():
    print("hi")


my_print()
my_print()
my_print()
my_print()
my_print()

print(my_print.__name__)
