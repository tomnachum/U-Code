USE sql_intro;
CREATE TABLE student(
    s_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    s_name VARCHAR(20),
    is_brilliant BIT
);
CREATE TABLE teacher(
    t_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    t_name VARCHAR(20),
    is_tenured BIT
);
CREATE TABLE student_teacher(
    student_id INT,
    teacher_id INT,
    FOREIGN KEY(student_id) REFERENCES student(s_id),
    FOREIGN KEY(teacher_id) REFERENCES teacher(t_id)
);