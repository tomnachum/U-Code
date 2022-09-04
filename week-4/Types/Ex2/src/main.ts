class Student{
    constructor(
        public name:string,
        public age:number,
        public grades: number[]
        ){}

        addGrade(grade:number){
            this.grades.push(grade)
        }

        getGradeAvg():number{
            let sum = 0
            for (const grade of this.grades){
                sum+=grade
            }
            return sum/this.grades.length
        }
}

(()=>{
    const students = [
        new Student("John", 26, [90,80,70, 80]),
        new Student("Doe", 27, [10,20,30, 25]),
        new Student("Mark", 28, [100,90,90, 100]),
    ]
    students.forEach(s=>console.log(`${s.name} avg: ${s.getGradeAvg()}`))
})()