from functools import wraps


def cache(func):
    previous_calls = {}

    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal previous_calls
        all_args = tuple(args) + tuple(kwargs.items())
        print(args, kwargs)
        print(all_args)
        if all_args in previous_calls:
            return previous_calls[all_args]
        result = func(*args, **kwargs)
        previous_calls[all_args] = result
        return result

    return inner
