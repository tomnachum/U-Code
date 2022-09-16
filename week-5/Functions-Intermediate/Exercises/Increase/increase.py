def increase_key_by(key, amount=1):
    def increase(object):
        object[key] += amount

    return increase


employee = {"name": "Momo", "age": 61, "salary": 10000}

increase_age_by_1 = increase_key_by("age")
increase_salary_by_1000 = increase_key_by("salary", 1000)

raise_salary = 0
while employee["age"] < 70:
    increase_age_by_1(employee)
    raise_salary += 1
    if raise_salary % 2 == 0:
        increase_salary_by_1000(employee)

print(f"salary in retirment: {employee['salary']}")
