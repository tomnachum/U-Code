
def divide(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except ZeroDivisionError:
    print("cannot divide by 0")
  except ValueError:
    print("x or y are not numbers")
  except TypeError:
    print("type error")

##################################3

def divide2(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except (ZeroDivisionError, TypeError) as e:
    print("error", e.args)