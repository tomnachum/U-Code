from fastapi import FastAPI
import uvicorn
from store import store

app = FastAPI()


@app.get("/{name}")
def get_price(name):
    for item in store:
        if item["name"] == name:
            return {"price": item["price"]}
    return {"price": None}


@app.get("/buy/{name}")
def buy_item(name):
    for item in store:
        if item["name"] == name:
            item["inventory"] -= 1 if item["inventory"] > 0 else 0
            return {"item": item}
    return {"item": None}


@app.get("/sale/")
def sale(admin=False):
    admin = True if admin == "true" else False
    if admin:
        for item in store:
            if item["inventory"] > 10:
                item["price"] *= 0.5
    return store


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
