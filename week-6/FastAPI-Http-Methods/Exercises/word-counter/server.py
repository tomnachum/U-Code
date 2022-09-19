from fastapi import FastAPI, Body, Request, Response, status
import uvicorn

app = FastAPI()

word_counter = {}

CREATED = "Created"
INCREMENTED = "Incremented"


@app.get("/")
def print_word_counter():
    return word_counter


@app.get("/sanity")
def root():
    return "server is running"


@app.get("/word/{word}")
def get_word_count(word):
    if word in word_counter:
        return {"count": word_counter[word]}
    return {"count": 0}


def add_word(word):
    if word in word_counter:
        word_counter[word] += 1
        return INCREMENTED
    else:
        word_counter[word] = 1
        return CREATED


@app.post("/word")
async def create_word(request: Request):
    req = await request.json()
    word = req["word"]
    return add_word(word)


@app.post("/sentence/{sentence}")
def create_sentence(sentence):
    numNewWords, numOldWords = 0, 0
    for w in sentence.split(" "):
        op = add_word(w)
        if op == INCREMENTED:
            numOldWords += 1
        elif op == CREATED:
            numNewWords += 1
    return {
        "text": f"Added {numNewWords} words, {numOldWords} already existed",
        "currentCount": -1,
    }


@app.delete("/word/{word}", status_code=200)
def delete_word(word, response: Response):
    if word not in word_counter:
        response.status_code = 404
        return f"{word} is not in DB."
    del word_counter[word]
    return f"{word} has been deleted properly."


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
