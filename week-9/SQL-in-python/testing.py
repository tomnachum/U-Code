import pymysql

# connection = pymysql.connect(
#     host="<url of the DB>",
#     user="<username>",
#     password="<password>",
#     db="<DB name>",
#     charset="utf8",
#     cursorclass=pymysql.cursors.DictCursor
# )

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)

# if connection.open:
#     print("the connection is opened")

# the with keyword open and close automatically the cursor.
# with connection.cursor() as cursor:
#     query = "SELECT * FROM company"
#     cursor.execute(query)
#     result = cursor.fetchall()
#     print(result)  # list of dictionaries, which is a list of rows of the query.

# # use try-except mechanizm to catch errors in the query
# try:
#     with connection.cursor() as cursor:
#         query = "SELECT * FROM noTable"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(type(result))
#         print(result)
# except:
#     print("DB Error")


try:
    with connection.cursor() as cursor:
        query = "SELECT name FROM company;"
        cursor.execute(query)
        result = cursor.fetchall()
        print(type(result))
        print(result)
except:
    print("DB Error")


try:
    with connection.cursor() as cursor:
        query = 'INSERT into company (name,industry, employees) values ("Wix", "hi tech", 4000)'
        cursor.execute(query)
        connection.commit()  # when doing stuff that are not SELECT, we need to use commit() method to activate the query.
except:
    print("Error")


try:
    with connection.cursor() as cursor:
        query = "SELECT name FROM company;"
        cursor.execute(query)
        result = cursor.fetchall()
        print(type(result))
        print(result)
except:
    print("DB Error")
