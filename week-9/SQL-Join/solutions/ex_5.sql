USE sql_intro;
SELECT symptoms_family,
    COUNT(*) AS num_of_cabbage
FROM patient AS p
WHERE disease = "cabbage disease"
GROUP BY symptoms_family;