closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

#1
#num of keys: 3

#2
print(closet["shirts"]["white"])

#3
print(closet["pants"]["shorts"]["flamingo-pink"])

#4
closet["pants"]["jeans"]["organic"] = 7

#5
closet["pants"]["jeans"]["denim"]-=4

#6
if closet["pants"]["shorts"]["flamingo-pink"] < closet["shirts"]["flamingo-pink"]:
    print("top")
else:
    print("bottom")