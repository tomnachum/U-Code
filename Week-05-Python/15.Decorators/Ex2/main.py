from func_info_decorator import func_info


# @func_info
# def add(x, y):
#     return x + y


# add(1, 2, 3, x=1, y=2)


@func_info
def add(*args, **kwargs):
    return args[0] + args[1]


add(1, 2, age=3, text="hello")
