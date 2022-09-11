try:
    age = int(input("How old are you? ")) 
    print(age)
except ValueError:
    print("cannot convert non numeric string to int")