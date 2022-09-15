from functools import wraps
import inspect


def get_default_args(func):
    signature = inspect.signature(func)
    return {
        k: v.default
        for k, v in signature.parameters.items()
        if v.default is not inspect.Parameter.empty
    }


def parse_arguments(args, kwargs, default_args):
    return tuple(args) + tuple(sorted({**default_args, **kwargs}.items()))


def cache(func):
    previous_calls = {}
    default_args = get_default_args(func)

    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal previous_calls, default_args
        all_args = parse_arguments(args, kwargs, default_args)
        if all_args in previous_calls:
            return previous_calls[all_args]
        result = func(*args, **kwargs)
        previous_calls[all_args] = result
        return result

    return inner
