USE sql_intro;

-- INSERT INTO deity
-- VALUES (null, "xxehxx", "Faen","Thunder", 4, 0),
-- (null, "ehxx", "Greek","Persuasion", 8, 1),
-- (null, "xxeh", "Faen","Persuasion", 9, 2),
-- (null, "xexhx", "Faen","Persuasion", 9, 2);


SELECT * 
FROM deity
WHERE name LIKE "%eh%"