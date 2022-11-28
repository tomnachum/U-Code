import calendar
import datetime

print(calendar.isleap(2010))
print(calendar.isleap(2020))

leap_counter = 0
for year in range(2020, 2081):
    if calendar.isleap(year):
        leap_counter += 1
print(leap_counter)

print(calendar.day_name[datetime.date(day=14, month=3, year=2028).weekday()])
