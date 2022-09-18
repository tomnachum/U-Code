import schedule
import time
import requests
from client import get_price, buy_item

prev_price = 0


def check_price_of_chair():
    global prev_price
    res = requests.get(f"http://localhost:8000/chair").json()
    cur_price = res["price"]
    if prev_price != 0 and cur_price < prev_price:
        requests.get(f"http://localhost:8000/buy/chair")
        print("bought chair for less")
    else:
        print("still waiting for a price drop...")
    prev_price = cur_price
    return cur_price


schedule.every(3).seconds.do(check_price_of_chair)

if __name__ == "__main__":
    while True:
        schedule.run_pending()
        time.sleep(1)
