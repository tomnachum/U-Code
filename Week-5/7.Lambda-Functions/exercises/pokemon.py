import json

with open("week-5\lambda-functions\exercises\pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)


pokemon_data = list(
    map(
        lambda p: {
            "id": p["id"],
            "name": p["name"],
            "type": p["type"],
            "weight": p["weight"],
            "height": p["height"],
            "weaknesses": p["weaknesses"],
        },
        pokemon_data,
    )
)


pokemon_names = list(map(lambda p: p["name"], pokemon_data))

strong_pokemons = list(filter(lambda p: p["weight"] > 100, pokemon_data))

water_pokemons = list(
    map(
        lambda p: p["name"],
        filter(lambda p: "Water" in p["weaknesses"], pokemon_data),
    )
)

water_pokemons2 = [p["name"] for p in pokemon_data if "Water" in p["weaknesses"]]
