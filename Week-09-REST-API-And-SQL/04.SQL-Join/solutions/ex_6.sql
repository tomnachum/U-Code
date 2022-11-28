USE sql_intro;
SELECT name,
    COUNT(*) AS num_of_lettuce
FROM patient AS p
    JOIN ethnicity AS e ON p.ethnicity = e.id
WHERE p.disease = "lettuce disease"
GROUP BY p.ethnicity;