USE sql_intro;

-- INSERT INTO deity
-- VALUES (null, "test delete 1", "Faen","what", 5, 0),
--  (null, "test delete 2", "Faen","why", 5, 0),
--  (null, "test delete 3", "Faen","hi why", 5, 0);

DELETE 
FROM deity
WHERE main_power LIKE "w%";
