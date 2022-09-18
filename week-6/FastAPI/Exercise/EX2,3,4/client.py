import requests


def get_price(name):
    res = requests.get(f"http://localhost:8000/{name}").json()
    print(res["price"])


get_price("table")
get_price("x")
