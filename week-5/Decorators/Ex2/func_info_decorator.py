def func_info(func):
    def inner(*args, **kwargs):
        try:
            result = func(*args, **kwargs)
            print(f"func name: {func.__name__}")
            print(f"args name: {args}")
            print(f"kwargs name: {kwargs}")
            print(f"return value: {result}")
            print(f"return type: {type(result)}")
        except TypeError as e:
            print("There was a problem with function arguments.\n" + e.args[0])

    return inner
