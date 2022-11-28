USE sql_intro;
-- SELECT *
-- from student;
-- SELECT *
-- from teacher;
SELECT s_name AS name
FROM student AS s,
    teacher AS t,
    student_teacher AS st
WHERE s.s_id = st.student_id
    AND t.t_id = st.teacher_id
    AND t.t_name = "Foster"