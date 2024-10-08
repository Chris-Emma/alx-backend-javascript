// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create 2 instances of the Student interface
const student1: Student = {
  firstName: 'Chris',
  lastName: 'Ocero',
  age: 26,
  location: 'Lira',
};

const student2: Student = {
  firstName: 'Emma',
  lastName: 'Okao',
  age: 27,
  location: 'Kampala',
};

// array containing the two student variables
const studentsList: Student[] = [student1, student2];

// render table, and for each elements in the array, append new row to the table
const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell_1 = row.insertCell(0);
  const cell_2 = row.insertCell(1);

  cell_1.textContent = student.firstName;
  cell_2.textContent = student.location;
});

document.body.appendChild(table);
