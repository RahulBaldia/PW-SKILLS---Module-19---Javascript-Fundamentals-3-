let student = {
    name: "Rahul Kumar",
    age: 17,
    grade: "A",
    updateGrade: function(newGrade) {
        this.grade = newGrade;
        console.log(`Grade updated to: ${this.grade}`);
    }
};

student.updateGrade("A+");