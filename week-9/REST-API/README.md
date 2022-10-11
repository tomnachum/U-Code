# Movie API Documentation

Easy-to-use api to retrive movies and actors data, and apply CRUD operations on it.

Base url: http://api.movieapp.com

## Endpoints

### 1. General Movie CRUD (show here examples of request response per endpoint)

1.1 GET /movies

Description: Read movies objects. Used pagination to return blocks of 20 movies in each request

Query params: page: integer. The index of the page to return.

Example:

```
GET http://api.movieapp.com/movies?page=2 HTTP/1.1
```

```
HTTP/1.1 200 OK
[
    {
         "title": "The Fellowship of the Ring",
         "plot": "The Lord of the Rings is an epic high-fantasy novel",
         "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
         "budget": 281000000,
         "revenue": 24000000000,
         "genres": "fantasy",
         "popularity": 9.5,
         "review": 9,
         "runtime": 178,
    }
    {...},
    ... total of 20 movies
]
```

---

1.2 POST /movies

Description: Add new movie to the movies collection.

Body: A movie object in JSON format.

Example:

```
POST http://api.movieapp.com/movies HTTP/1.1

{
    "title": "The Fellowship of the Ring",
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 9.5,
    "review": 9,
    "runtime": 178,
}
```

```
HTTP/1.1 201 Created
Location: /movies/430
{
    "id": 430
    "title": "The Fellowship of the Ring",
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 9.5,
    "review": 9,
    "runtime": 178,
}
```

Errors:

1.  In case you try to post new movie without a mandatory field (described at "Movie" section below), you'll get an error 400.

```
POST http://api.movieapp.com/movies HTTP/1.1

{
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 9.5,
    "review": 9,
    "runtime": 178,
}
```

```
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "title": "required"
    }
}
```

---

1.3 PUT /movies/:id

Description: Update a movie from the collection.

Body: A movie object in JSON format.

Parameters: id: number. The id of the movie to update.

Example:

```
PUT http://api.movieapp.com/movies/430 HTTP/1.1

{
    "title": "The Fellowship of the Ring",
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 10,
    "review": 9,
    "runtime": 178,
}
```

```
HTTP/1.1 200 OK
Location: /movies/430
{
    "id": 430
    "title": "The Fellowship of the Ring",
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 9.5,
    "review": 10,
    "runtime": 178,
}
```

Errors:

1.  In case you try to update a movie without a mandatory field (described at "Movie" section below), you'll get an error 400. (See example in post method).

2.  In case you try to access a movie that does not exist you'll get error 404

```
PUT http://api.movieapp.com/movies/270 HTTP/1.1

{
    "title": "The Fellowship of the Ring",
    "plot": "The Lord of the Rings is an epic high-fantasy novel",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "budget": 281000000,
    "revenue": 24000000000,
    "genres": "fantasy",
    "popularity": 10,
    "review": 9,
    "runtime": 178,
}
```

```
HTTP/1.1 404 Not Found
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "message": "id does not exist."
    }
}
```

---

1.4 DELETE /movies/:id

Description: Delete a movie from the collection.

Parameters: id: number. The id of the movie to update.

Example:

```
DELETE http://api.movieapp.com/movies/430 HTTP/1.1
```

```
HTTP/1.1 204 No content
```

Errors:

1.  In case you try to delete a movie that does not exist you'll get error 404

```
DELETE http://api.movieapp.com/movies/270 HTTP/1.1
```

```
HTTP/1.1 404 Not Found
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "message": "id does not exist."
    }
}
```

---

---

---

### 2. General Actor CRUD (show here examples of request response per endpoint)

1.1 GET /actors

Description: Read actors objects. Used pagination to return blocks of 20 actors in each request

Query params: page: integer. The index of the page to return.

Example:

```
GET http://api.movieapp.com/actors?page=2 HTTP/1.1
```

```
HTTP/1.1 200 OK
[
    {
        "name": "Leonardo DiCaprio",
        "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
        "birthday": "1974-11-11",
        "deathday": null,
        "gender": 2,
        "popularity": 9.5,
    }
    {...},
    ... total of 20 actors
]
```

---

1.2 POST /actors

Description: Add new actor to the movies collection.

Body: A actor object in JSON format.

Example:

```
POST http://api.movieapp.com/movies HTTP/1.1

{
 "name": "Leonardo DiCaprio",
 "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
 "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
 "birthday": "1974-11-11",
 "deathday": null,
 "gender": 2,
 "popularity": 9.5,
}
```

```
HTTP/1.1 201 Created
Location: /actors/430
{
     "id": 430
     "name": "Leonardo DiCaprio",
     "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
     "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
     "birthday": "1974-11-11",
     "deathday": null,
     "gender": 2,
     "popularity": 9.5,
}
```

Errors:

1.  In case you try to post new actors without a mandatory field (described at "Actor" section below), you'll get an error 400.

```
POST http://api.movieapp.com/actors HTTP/1.1

{
     "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
     "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
     "birthday": "1974-11-11",
     "deathday": null,
     "gender": 2,
     "popularity": 9.5,
}
```

```
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "name": "required"
    }
}
```

---

1.3 PUT /actors/:id

Description: Update a actor from the collection.

Body: A actor object in JSON format.

Parameters: id: number. The id of the actor to update.

Example:

```
PUT http://api.movieapp.com/movies/430 HTTP/1.1

{
     "name": "Leonardo DiCaprio",
     "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
     "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
     "birthday": "1974-11-11",
     "deathday": null,
     "gender": 2,
     "popularity": 9.5,
}
```

```
HTTP/1.1 200 OK
Location: /actors/430
{
     "name": "Leonardo DiCaprio",
     "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
     "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
     "birthday": "1974-11-11",
     "deathday": null,
     "gender": 2,
     "popularity": 9.5,
}
```

Errors:

1.  In case you try to update an actor without a mandatory field (described at "Actor" section below), you'll get an error 400. (See example in post method).

2.  In case you try to access a actor that does not exist you'll get error 404

```
PUT http://api.movieapp.com/actors/270 HTTP/1.1

{
     "name": "Leonardo DiCaprio",
     "bio": "Leonardo Wilhelm DiCaprio (/diˈkæprioʊ/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer",
     "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
     "birthday": "1974-11-11",
     "deathday": null,
     "gender": 2,
     "popularity": 9.5,
}
```

```
HTTP/1.1 404 Not Found
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "message": "id does not exist."
    }
}
```

---

1.4 DELETE /actors/:id

Description: Delete an actor from the collection.

Parameters: id: number. The id of the actor to update.

Example:

```
DELETE http://api.movieapp.com/actors/430 HTTP/1.1
```

```
HTTP/1.1 204 No content
```

Errors:

1.  In case you try to delete a movie that does not exist you'll get error 404

```
DELETE http://api.movieapp.com/actors/270 HTTP/1.1
```

```
HTTP/1.1 404 Not Found
Content-Type: application/json

{
"error": "Invalid data",
"details": {
        "message": "id does not exist."
    }
}
```

---

---

---

### 3. Get actors of a specific movie.

GET /actors

Description: Read actors objects. Used pagination to return blocks of 20 actors in each request

Query params: movieId: integer. id of a specific movie.

Example:

```
GET http://api.movieapp.com/actors?movieId=5 HTTP/1.1
```

Errors:

1. In case a movie with a given id is not exists, return 404 error.

---

---

---

### 4. Add an actor to a specific movie.

- Assuming that each actors has an attribute of movies as an array

PATCH /actors/:id

Description: add a movie to the list of movies of an actor. you can also put an array in the movie field.

Body: the movie to append in JSON format.

Example:

```
PATCH http://api.movieapp.com/actors/257 HTTP/1.1

{
    "movie": "Harry Potter"
}
```

---

---

---

### 5. Remove an actor from a specific movie.

DELETE /actors/:id/movie/:id

Description: delete a movie from the list of movies of an actor.

Example:

```
DELETE http://api.movieapp.com/actors/257/movie/56 HTTP/1.1
```

---

---

---

### 6. Get the top 3 stars (most popular actors) of a specific movie.

GET /actors/top3/movie/:id

Description: get the top 3 most popular actors in the given movie.

Example:

```
GET http://api.movieapp.com/actors/top3/movie/56 HTTP/1.1
```

---

---

---

### 7. Update a specific movie’s revenue.

PATCH /movies/:id

Description: Update a specific movie’s revenue.

Body: the revenue to update.

Example:

```
PATCH http://api.movieapp.com/movies/56 HTTP/1.1

{
    "revenue": 500000000
}
```

---

---

---

### 8. Get the top 10 action movies.

GET /movies/action/top10

Example:

```
GET http://api.movieapp.com/movies/action/top10 HTTP/1.1
```

---

---

---

### 9. Get the drama movies of a specific actor.

GET /movies/drama

Query params: actorId: number, the actor which we want it's drama movies.

Example:

```
GET http://api.movieapp.com/movies/drama?actorId=576 HTTP/1.1
```

---

---

---

### 10. Get the top 3 most popular movies of a specific actor.

GET /movies/top3

Query params: actorId: number, the actor which we want it's top3 movies.

Example:

```
GET http://api.movieapp.com/movies/top3?actorId=576 HTTP/1.1
```

---

---

---

### 11. Create 5 actors in a single request.

You can use the POST method to do that.
Just attach to the request body a list of 5 actors in JSON format.

---

---

---

## Movie object

- title - string. The full name of the movie.
- plot - string. A short plot description of the movie.
- poster - string. A URL to the actor’s image
- budget - number. The movie’s budget in US dollars.
- revenue - number. The movie’s revenue up-to-date in US dollars.
- genres - string array. An array of strings representing the movie’s genres (e.g. Comedy, Drama, etc.)
- popularity - number. A float from 0 to 10 representing the movie’s popularity. 9.93 is a very popular movie, while 1.3 is an unknown movie.
- review - number. A float from 0 to 10 representing an average of the movie’s professional review.
- runtime - number. An integer of the movie’s runtime in minutes.

## Actor object

- name - string. The full name of the actor
- bio - string. A short biography of the actor
- image - string. A URL to the actor’s image.
- birthday - string. A string representation of the actor’s birthday. For example November 13th 1980 will be “1980–13-11”
- deathday - string. A string representation of the actor’s death date. If alive value will be null.
- gender - number. 1 for female, 2 for male.
- popularity - number. A float from 0 to 10 representing the actor’s popularity. 9.93 is a very popular actor, while 1.3 is a novice known actor.
