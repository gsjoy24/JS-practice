let students = [
	{ id: 1, name: 'Joy' },
	{ id: 2, name: 'Gour' },
	{ id: 3, name: 'Fahad' },
	{ id: 4, name: 'Sumi' }
];

//access the names with map method.
const names = students.map((s) => s.name);
console.log(names);

//access the names with for loop.
let studentsName = [];
for (var i = 0; i < students.length; i++) {
	student = students[i];
	// studentName = student.name;
	// studentsName.push(studentsName);
	studentsName.push(student.name);
}
console.log(studentsName);
