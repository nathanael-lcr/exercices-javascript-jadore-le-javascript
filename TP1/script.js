// Déclaration des variables de classe
const className = "B1-A";
let numberOfStudents = 25;
let classOpen = true;

//===============================

// Affichage des informations de classe
console.log(`Class Name: ${className}`);
console.log(`Number of Students: ${numberOfStudents}`);
console.log(`Is Class Open? ${classOpen}`);

//===============================

// Création d'un objet étudiant
const student = {
  name: "Alice",
  mathNote: 20,
  frenchNote: 12,
};

console.log(`Student Name: ${student.name}`);

//===============================

// Tableau d'étudiants
const students = [
  { name: "Bob", mathNote: 15, frenchNote: 14 },
  { name: "Charlie", mathNote: 18, frenchNote: 16 },
  { name: "Diana", mathNote: 10, frenchNote: 11 },
];

//===============================

// Affichage des noms des étudiants avec une boucle for
for (let i = 0; i < students.length; i++) {
  console.log(`Student Name: ${students[i].name}`);
}

//===============================

// Calcul de la moyenne individuelle de chaque étudiant
let average = 0;

students.forEach((student) => {
  average = (student.mathNote + student.frenchNote) / 2;
  console.log(`Current Average: ${average}`);
  average = 0;
});

//===============================

// Vérification si les étudiants ont réussi (moyenne >= 10)
students.forEach((student) => {
  average = (student.mathNote + student.frenchNote) / 2;
  if (average >= 10) {
    console.log(`${student.name} has passed with an average of ${average}`);
  } else {
    console.log(`${student.name} has failed with an average of ${average}`);
  }
  average = 0;
});

//===============================

// Classification des résultats avec switch case
students.forEach((student) => {
  average = (student.mathNote + student.frenchNote) / 2;
  if (average >= 10) {
    switch (true) {
      case average >= 16:
        console.log(
          `${student.name} has passed with distinction with an average of ${average}`
        );
        break;
      case average >= 14:
        console.log(
          `${student.name} has passed with merit with an average of ${average}`
        );
        break;
      case average >= 12:
        console.log(
          `${student.name} has passed with good enough with an average of ${average}`
        );
        break;
      case average >= 10:
        console.log(`${student.name} has passed with an average of ${average}`);
        break;
    }
  } else {
    console.log(`${student.name} has failed with an average of ${average}`);
  }
  average = 0;
});

//===============================

// Comptage des étudiants qui ont réussi
let studentsPassed = 0;
let i = 0;

while (i < students.length) {
    const student = students[i];
    average = (student.mathNote + student.frenchNote) / 2;
    if (average >= 10) {
        studentsPassed++;
        switch (true) {
            case average >= 16:
                console.log(
                    `${student.name} has passed with distinction with an average of ${average}`
                );
                break;
            case average >= 14:
                console.log(
                    `${student.name} has passed with merit with an average of ${average}`
                );
                break;
            case average >= 12:
                console.log(
                    `${student.name} has passed with good enough with an average of ${average}`
                );
                break;
            case average >= 10:
                console.log(`${student.name} has passed with an average of ${average}`);
                break;
        }
    } else {
        console.log(`${student.name} has failed with an average of ${average}`);
    }
    average = 0;
    i++;
}
console.log(`Total Students Passed So Far: ${studentsPassed}`);

//===============================

// Calcul de la moyenne générale de la classe
let classAverage = 0;

students.forEach((student) => {
  average = (student.mathNote + student.frenchNote) / 2;
  classAverage += average;
  if (average >= 10) {
    studentsPassed++;
    switch (true) {
      case average >= 16:
        console.log(
          `${student.name} has passed with distinction with an average of ${average}`
        );
        break;
      case average >= 14:
        console.log(
          `${student.name} has passed with merit with an average of ${average}`
        );
        break;
      case average >= 12:
        console.log(
          `${student.name} has passed with good enough with an average of ${average}`
        );
        break;
      case average >= 10:
        console.log(`${student.name} has passed with an average of ${average}`);
        break;
    }
  } else {
    console.log(`${student.name} has failed with an average of ${average}`);
  }
  average = 0;
});

classAverage = classAverage / students.length;
console.log(`Class Average: ${classAverage}`);

// Ajout d'un nouvel étudiant et affichage de la liste
students.push({ name: "Eve", mathNote: 14, frenchNote: 15 });
students.forEach((student) => {
  console.log(`Student Name: ${student.name}`);
});

// Vérification si tous les étudiants ont réussi
if (studentsPassed == students.length) {
  console.log("All students have passed!");
}

console.log(`Total Students Passed So Far: ${studentsPassed}`);
