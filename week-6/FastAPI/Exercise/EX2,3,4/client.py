import requests

money = 1000


def get_price(name):
    res = requests.get(f"http://localhost:8000/{name}").json()
    price = res["price"]
    print(price)
    return price


# get_price("table")
# get_price("x")


def buy_item():
    global money
    name = input("Which item do you want to buy? ")
    price = get_price(name)
    if price > money:
        print(f"You don't have enough money to buy {name}")
        return
    money -= price
    res = requests.get(f"http://localhost:8000/buy/{name}").json()
    item = res["item"]
    if item is not None:
        print(
            f"Congratulations, you've just bought {item['name']} for {item['price']}. There are {item['inventory']} left now in the store."
        )
    else:
        print("There is no such item in store")


# buy_item()
