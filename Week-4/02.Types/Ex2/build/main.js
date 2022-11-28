"use strict";
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        let sum = 0;
        for (const grade of this.grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    }
}
(() => {
    const students = [
        new Student("John", 26, [90, 80, 70, 80]),
        new Student("Doe", 27, [10, 20, 30, 25]),
        new Student("Mark", 28, [100, 90, 90, 100]),
    ];
    students.forEach(s => console.log(`${s.name} avg: ${s.getGradeAvg()}`));
})();
//# sourceMappingURL=main.js.map