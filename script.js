class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return `${this.name}`;
    }

    set Age(age) {
        this.age = age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
	constructor(name){
		super (name);
	}
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
