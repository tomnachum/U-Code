from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import Body

app = FastAPI()

wonders = [{"ID": 1, "name": "The Great Pyramid", "location": "Giza"}]
cur_id = 1


@app.get("/")
def root():
    return wonders


@app.get("/wonder/{id}")
def get_wonder(id):
    for w in wonders:
        if w["ID"] == int(id):
            return {"wonder": w}
    return {"wonder": None}


@app.post("/wonders", status_code=201)
async def create_wonder(request: Request):
    global cur_id
    cur_id += 1
    wonder = await request.json()
    wonder["ID"] = cur_id
    wonders.append(wonder)
    return "Created"


@app.put("/wonders/{id}")
def update_wonder(id, name=Body(...), location=Body(...)):
    for w in wonders:
        if w["ID"] == int(id):
            w["name"] = name
            w["location"] = location
            return "Updated"
    return "Not Updated"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
