from fastapi import FastAPI, Request, Response, status
import uvicorn
import requests
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from utils.constants import *
from server_helper import *

app = FastAPI()

app.mount(
    f"/{JS_FILES_DIR}",
    StaticFiles(directory=JS_FILES_DIR),
    name=JS_FILES_DIR,
)

app.mount(
    f"/{TEMPLATE_DIR}",
    StaticFiles(directory=TEMPLATE_DIR),
    name=TEMPLATE_DIR,
)


@app.get("/")
def get_html():
    return FileResponse(HTML_DIR)


# @app.get("/check")
# def get_players():
#     return {"check": "OK"}

# ----------------------------- a request with a body
# @app.put("/endpoint")
# async def add_player(request: Request):
#     body = await request.json()

# ----------------------------- external api call
# def external_api_call():
#     pokemon_response = requests.get(
#         f"https://pokeapi.co/api/v2/pokemon/{p_name}"
#     ).json()

# ----------------------------- status code
# @app.put("/get-or-create-task/{task_id}", status_code=status.HTTP_200_OK)
# def get_or_create_task(task_id: str, response: Response):
#     if task_id not in tasks:
#         tasks[task_id] = "This didn't exist before"
#         response.status_code = status.HTTP_201_CREATED
#     return tasks[task_id]

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8041, reload=True)
