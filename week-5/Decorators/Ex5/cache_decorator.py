from functools import wraps
import inspect


def parse_arguments(func, regular_args, kwargs):
    parameter_objects = inspect.signature(func).parameters
    regular_args_names = list(parameter_objects.keys())[: len(regular_args)]
    regular_args_tuple = tuple(zip(regular_args_names, regular_args))
    default_args_dict = {
        k: v.default
        for k, v in list(parameter_objects.items())[len(regular_args) :]
        if v.default is not inspect.Parameter.empty
    }
    kwargs_tuple = tuple(sorted({**default_args_dict, **kwargs}.items()))
    return regular_args_tuple + kwargs_tuple


def cache(func):
    previous_calls = {}

    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal previous_calls
        all_args = parse_arguments(func, args, kwargs)
        if all_args in previous_calls:
            return previous_calls[all_args]
        result = func(*args, **kwargs)
        previous_calls[all_args] = result
        return result

    return inner
