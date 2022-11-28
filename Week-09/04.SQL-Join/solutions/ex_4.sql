USE sql_intro;
SELECT id,
    survival_rate
from patient AS p
    JOIN disease AS d ON p.disease = d.name
WHERE p.disease IS NOT NULL
ORDER BY id;