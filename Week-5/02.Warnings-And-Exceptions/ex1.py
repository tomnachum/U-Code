dividend = float(input("Enter the dividend: "))
divisor = float(input("Enter the divisor: "))
quotient = dividend/divisor
print(math.floor(quotient)) 

# errors here:
# 1. divisor can be 0 - ZeroDivisionError
# 2. input can be a non numeric string - ValueError
# 3. math should be with capital letter- NameError