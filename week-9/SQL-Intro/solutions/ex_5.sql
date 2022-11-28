USE sql_intro;
UPDATE dolphin
SET healthy = 0
WHERE color = "green"
    OR color = "brown";