from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import Body

app = FastAPI()

word_counter = {"tom": 4}


@app.get("/sanity")
def root():
    return "server is running"


@app.get("/word/{word}")
def get_word_count(word):
    if word in word_counter:
        return {"count": word_counter[word]}
    return {"count": 0}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
