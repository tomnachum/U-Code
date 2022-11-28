USE sql_intro;

INSERT INTO deity
VALUES (null, "test sort", "Faen","Thunder", 5, 0);

SELECT name, coolness, creation_date
FROM deity
ORDER BY creation_date, coolness DESC