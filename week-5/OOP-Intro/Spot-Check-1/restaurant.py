from mimetypes import init
from pickletools import read_stringnl_noescape
from unicodedata import name


class Restaurant:
    def __init__(self, name: str, ratings: int, is_vegitarian: bool) -> None:
        self.name = name
        self.ratings = ratings
        self.is_vegitarian = is_vegitarian

    def get_menu(self):
        print("We have vegtables" if self.is_vegitarian else "We have meat")


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)

print(r3.ratings)
r3.get_menu()
r2.get_menu()
