import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE DATABASE grocery_store;"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE categories(name VARCHAR(22) NOT NULL PRIMARY KEY);"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = (
#             "INSERT INTO categories VALUES('Vegtables'),('Drinks'),('Meat'),('Snacks')"
#         )
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(22),price INT,category VARCHAR(22),FOREIGN KEY(category) REFERENCES categories(name));"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = "INSERT INTO products VALUES (null, 'Tomato', 3, 'Vegtables'),(null, 'Beer', 8, 'Drinks'),(null, 'Water', 5, 'Meat'),(null, 'Burger', 20, 'Meat'),(null, 'Chips', 3, 'Snacks'),(null, 'Doritos', 5, 'Snacks');"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")
