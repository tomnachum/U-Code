from mimetypes import init
from pickletools import read_stringnl_noescape
from unicodedata import name


class Restaurant:
    def __init__(self, name: str, ratings: int, is_vegitarian: bool) -> None:
        self.name = name
        self.ratings = ratings
        self.is_vegitarian = is_vegitarian


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)

print(r3.ratings)
