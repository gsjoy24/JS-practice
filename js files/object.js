var student = {
	name: 'Gour Saha Joy',
	roll: 203259,
	year: '2020-2021',
	class: 'eleven',
	phone: 12345672231
};

//access the values of the object in defferent ways.
console.log(student);
console.log(student.name);
console.log(student.name, student.roll);
console.log(student['year']);

//update the phone number
student.phone = 177252;
console.log('line no 17', student.phone);

//add a new value
student.profession = 'web development';
console.log(student.profession);

//delete a value
delete student.class;

let studentID = {
	name: 'Joy',
	profession: 'web development',
	collage: [
		{
			name: 'Banglabandhu Collage Rajshahi',
			location: 'Padma Abasik Elaka',
			since: '1995'
		}
	]
};

let clgName = studentID.collage[0].name;
let clgLocation = studentID.collage[0].location;
console.log(clgName);
console.log(clgLocation);
