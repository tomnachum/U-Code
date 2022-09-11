def parse(value):
    return {
        "1": value==value[::-1],
        "2": value.islower(),
        "3": value.isdigit(),
        "4": len(value)>15,
        "5": value==""
    }

def run():
    value = str(input("Enter an input: "))
    d = parse(value)
    print(
        "1- is palindrome - Check if the input is palindrome\n" +
        "2- is lower - Check if all characters in the input are lowercase\n" +
        "3- is all digits - Check if all characters in the input are digits\n" +
        "4- long - Check if the input length is longer than 15 characters\n" +
        "5- empty - Check if the input is empty\n" +
        "6- exit - exit successfully from the application\n"
        )
    op = str(input("Pleasr enter the number of operation you choose: "))
    if op=="6":
        print("Bye Bye")
        return 
    print(f"The answer is: {d[op]}")

run()