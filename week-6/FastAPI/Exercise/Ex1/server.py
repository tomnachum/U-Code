from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount(
    "/static",
    StaticFiles(directory="week-6\FastAPI\Exercise\Ex1\static"),
    name="static",
)


@app.get("/sanity")
def sanity():
    return "Server is up and running smoothly"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
