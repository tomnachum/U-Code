USE sql_intro;
-- CREATE TABLE dolphin(
--     name VARCHAR(20) NOT NULL PRIMARY KEY,
--     color VARCHAR(20),
--     height INT,
--     healthy BIT NOT NULL DEFAULT 1
-- );
-- INSERT INTO dolphin
-- VALUES ("Daron", "pink", 4, 1),
--     ("Chandler", "yellow", 1, 0),
--     ("Joey", "blue", 1, 1),
--     ("Febe", "red", 3, 1),
--     ("Monika", "green", 5, 0);
-- INSERT into dolphin
-- VALUES ("g", 4, 4)
-- error is that number of columns is diffrent - meaning therer is missing data in order to create this row
SELECT *
FROM dolphin
WHERE height > 2;