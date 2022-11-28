USE sql_intro;

-- INSERT INTO deity
-- VALUES (null, "X1", "Faen","Thunder", 4, 0),
-- (null, "X2", "Greek","Persuasion", 8, 1),
-- (null, "X3", "Faen","Persuasion", 9, 2),
-- (null, "X4", "Greek","Thunder", 10, 3),
-- (null, "X5", "Faen","Persuasion", 2, 4);

SELECT * 
FROM deity
WHERE mythology = "Greek" AND coolness > 8;
