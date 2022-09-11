from datetime import datetime

print(f"mili seconds {datetime.now().microsecond * 0.001}")
print(f"second: {datetime.now().second}")
print(f"minute: {datetime.now().minute}")
print(f"hour: {datetime.now().hour}")
print(f"day: {datetime.now().day}")
print(f"month: {datetime.now().month}")
print(f"year: {datetime.now().year}")
