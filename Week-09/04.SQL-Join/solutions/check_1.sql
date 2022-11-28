USE sql_intro;
SELECT item_purchased,
    amount,
    name,
    industry
FROM transaction
    JOIN company ON transaction.company_id = company.id;