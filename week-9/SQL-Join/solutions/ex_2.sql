USE sql_intro;
SELECT COUNT(*) AS num_of_sick
FROM patient
WHERE disease IS NOT NULL;