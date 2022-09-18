from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount(
    "/static",
    StaticFiles(directory="week-6\FastAPI\server_example\static"),
    name="static",
)


@app.get("/")
def root():
    return {"message": "Someone has made a request and accessed the server. Exciting!"}


@app.get("/maps")
def maps():
    return "Here's some stuff related to maps"


@app.get("/shoobi")
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
