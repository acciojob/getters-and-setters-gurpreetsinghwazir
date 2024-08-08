//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age =age;
	}

	getName() {
		return this.name; // Removed the unnecessary parameter and returned the name directly
	}

	getAge() {
		return this.age; // Added method to get the age
	}

	setAge(age) {
		this.age = age;
	}
	
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
