class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getter for name
    get Name() {
        return this.name;
    }

    // Setter for age
    set Age(age) {
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age); // Pass both name and age to the parent constructor
    }

    // study method
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age); // Pass both name and age to the parent constructor
    }

    // teach method
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
