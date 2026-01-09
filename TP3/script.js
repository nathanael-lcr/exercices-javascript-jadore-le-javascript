//////////////////////// Code fourni (ne pas modifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille =
  Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) +
  taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
  // Générer une note aléatoire entre 0 et note_maximum (inclus)
  let note = Math.floor(Math.random() * (note_maximum + 1));
  // Ajouter la note générée au tableau
  notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////

/////////////////////// Partie 1 ///////////////////////////

// Liste de prénoms pour les élèves
let names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"];
// Créer un tableau d'élèves avec des objets
let classe = [];
for (let i = 0; i < taille; i++) {
  classe.push({
    prenom: names[Math.floor(Math.random() * names.length)],
    noteFrancais: Math.floor(Math.random() * 21),
    noteMaths: Math.floor(Math.random() * 21),
    noteHistoire: Math.floor(Math.random() * 21),
  });

  // Calculer la moyenne de chaque élève
  let moyenne =
    (classe[i].noteFrancais + classe[i].noteMaths + classe[i].noteHistoire) /
    3;
  classe[i].moyenne = parseFloat(moyenne.toFixed(2));
  
  // Afficher chaque élève avec son prénom et sa moyenne
  console.log(classe[i].prenom + " - " + classe[i].moyenne);
}

// Créer une copie du tableau original pour le comparer plus tard
let classeDupe = JSON.parse(JSON.stringify(classe));

/////////////////////// Partie 2 ///////////////////////////

console.log("Taille de la classe : " + classe.length);

// Trouver la plus petite moyenne
let plusPetiteValeur = classe[0].moyenne;
let indicePlusPetiteValeur = 0;
for (let i = 1; i < classe.length; i++) {
  if (classe[i].moyenne < plusPetiteValeur) {
    plusPetiteValeur = classe[i].moyenne;
    indicePlusPetiteValeur = i;
  }
}

// Trouver la plus grande moyenne
let plusGrandeValeur = classe[0].moyenne;
let indicePlusGrandeValeur = 0;
for (let i = 1; i < classe.length; i++) {
  if (classe[i].moyenne > plusGrandeValeur) {
    plusGrandeValeur = classe[i].moyenne;
    indicePlusGrandeValeur = i;
  }
}

// Afficher les résultats
console.log(
  "Plus petite Moyenne : " +
    plusPetiteValeur +
    ", Plus grande Moyenne : " +
    plusGrandeValeur
);

/////////////////////// Partie 3 ///////////////////////////

console.log(
  "Élève avec la plus petite moyenne : " +
    classe[indicePlusPetiteValeur].prenom +
    " - " +
    classe[indicePlusPetiteValeur].moyenne +
    " (indice : " +
    indicePlusPetiteValeur +
    ")"
);

/////////////////////// Partie 4 ///////////////////////////

console.log("Tableau avant échange :");
for (let i = 0; i < classe.length; i++) {
  console.log(classe[i].prenom + " - " + classe[i].moyenne);
}

let temp = classe[0];
classe[0] = classe[indicePlusPetiteValeur];
classe[indicePlusPetiteValeur] = temp;

console.log("Tableau après échange :");
for (let i = 0; i < classe.length; i++) {
  console.log(classe[i].prenom + " - " + classe[i].moyenne);
}

/////////////////////// Partie 5 ///////////////////////////

let nombreDeVerifications = 0;
let nombreDEchanges = 0;

for (let i = 0; i < classe.length - 1; i++) {
  let indiceMin = i;
  for (let j = i + 1; j < classe.length; j++) {
    if (classe[j].moyenne < classe[indiceMin].moyenne) {
      indiceMin = j;
      nombreDeVerifications++;
    }
  }
  if (indiceMin !== i) {
    let temp = classe[i];
    classe[i] = classe[indiceMin];
    classe[indiceMin] = temp;
    nombreDEchanges++;
  }
}

/////////////////////// Partie 6 ///////////////////////////

console.log("Tableau avant tri :");
for (let i = 0; i < classeDupe.length; i++) {
  console.log(classeDupe[i].prenom + " - " + classeDupe[i].moyenne);
}

console.log("Tableau trié par ordre croissant :");
for (let i = 0; i < classe.length; i++) {
  console.log(classe[i].prenom + " - " + classe[i].moyenne);
}

console.log("Nombre de comparaisons : " + nombreDeVerifications);
console.log("Nombre d'échanges : " + nombreDEchanges);

/////////////////////// BONUS ///////////////////////////

nombreDeVerifications = 0;
nombreDEchanges = 0;

for (let i = 0; i < classe.length - 1; i++) {
  let indiceMin = i;
  for (let j = i + 1; j < classe.length; j++) {
    if (classe[j].noteMaths < classe[indiceMin].noteMaths) {
      indiceMin = j;
      nombreDeVerifications++;
    }
  }
  if (indiceMin !== i) {
    let temp = classe[i];
    classe[i] = classe[indiceMin];
    classe[indiceMin] = temp;
    nombreDEchanges++;
  }
}

console.log("Tableau trié par notes de Maths :");
for (let i = 0; i < classe.length; i++) {
  console.log(classe[i].prenom + " - Maths: " + classe[i].noteMaths);
}

console.log("Nombre de comparaisons (Maths) : " + nombreDeVerifications);
console.log("Nombre d'échanges (Maths) : " + nombreDEchanges);
