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


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
