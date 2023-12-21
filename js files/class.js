class teacher {
	constructor(id, name) {
		this.id = 12;
		this.name = 'Tom';
	}
}

// let teacher1 = new teacher(12, 'Abul');
// let teacher2 = new teacher(13, 'Kabul');
// console.log(teacher1);
// console.log(teacher2);

class student extends teacher {
	constructor() {
		super();
		this.name = 'Joy';
		this.roll = 22;
		this.college = 'Bangabandhu College Rashahi';
		this.from = 'Chapaianwanganj';
	}
}
let student1 = new student();
console.log(student1);
