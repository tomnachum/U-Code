CREATE DATABASE grocery_store;
CREATE TABLE categories(name VARCHAR(22) NOT NULL PRIMARY KEY);
INSERT INTO categories
VALUES ('Vegtables'),
    ('Drinks'),
    ('Meat'),
    ('Snacks');
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(22),
    price INT,
    category VARCHAR(22),
    FOREIGN KEY(category) REFERENCES categories(name)
);
INSERT INTO products
VALUES (null, 'Tomato', 3, 'Vegtables'),
    (null, 'Beer', 8, 'Drinks'),
    (null, 'Water', 5, 'Meat'),
    (null, 'Burger', 20, 'Meat'),
    (null, 'Chips', 3, 'Snacks'),
    (null, 'Doritos', 5, 'Snacks');