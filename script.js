//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age =age;
	}

	getName(name) {
		return this.name; // Removed the unnecessary parameter and returned the name directly
	}

		setAge(age) {
		this.age = age;
	}
	
}

class Student extends Person {
	constructor(name){
		super(name)
	  this.name=name;	
	}
	
	study(){
		
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
constructor(name){
		super(name)
	  this.name=name;	
	}
	
	teach(){
		console.log(`${this.name} is teaching`)
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
