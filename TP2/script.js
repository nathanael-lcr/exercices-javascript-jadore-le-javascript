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

// Créer une copie du tableau original pour le comparer plus tard
let notesDupe = [...notes];

/////////////////////// Partie 1 ///////////////////////////

// Afficher les informations de base sur le tableau
console.log("Taille du tableau : " + notes.length);
console.log("Plus petite valeur : " + Math.min(...notes));
console.log("Plus grande valeur : " + Math.max(...notes));
console.log("Tableau des notes : " + notes);

/////////////////////// Partie 2 ///////////////////////////

// Trouver la plus petite valeur et son indice
let plusPetiteValeur = notes[0];
let indicePlusPetiteValeur = 0;
for (let i = 1; i < notes.length; i++) {
  if (notes[i] < plusPetiteValeur) {
    plusPetiteValeur = notes[i];
    indicePlusPetiteValeur = i;
  }
}

// Afficher la plus petite valeur et son indice
console.log(
  "Plus petite valeur : " +
    plusPetiteValeur +
    ", Indice : " +
    indicePlusPetiteValeur
);

/////////////////////// Partie 3 ///////////////////////////

// Échanger la plus petite valeur avec la première valeur du tableau
console.log("Tableau avant échange : " + notes);
let temp = notes[0];
notes[0] = notes[indicePlusPetiteValeur];
notes[indicePlusPetiteValeur] = temp;
console.log("Tableau après échange : " + notes);

/////////////////////// Partie 4 ///////////////////////////

// Tri par sélection
let nombreDeVerifications = 0;
let nombreDEchanges = 0;


// Implémentation du tri par sélection
for (let i = 0; i < notes.length - 1; i++) {
  let indiceMin = i;
  for (let j = i + 1; j < notes.length; j++) {
    if (notes[j] < notes[indiceMin]) {
      indiceMin = j;
      nombreDeVerifications++;
    }
  }
  if (indiceMin !== i) {
    let temp = notes[i];
    notes[i] = notes[indiceMin];
    notes[indiceMin] = temp;
    nombreDEchanges++;
  }
  console.log("Étape " + (i + 1) + " : " + notes);
}

/////////////////////// Partie 5 ///////////////////////////

// Afficher le tableau avant et après le tri
console.log("Tableau avant tri : " + notesDupe);
console.log("Tableau trié : " + notes);

/////////////////////// Partie BONUS ///////////////////////////


console.log("Nombre de vérifications : " + nombreDeVerifications);
console.log("Nombre d'échanges : " + nombreDEchanges);

// Tri par sélection en ordre décroissant
for (let i = 0; i < notes.length - 1; i++) {
  let indiceMin = i;
  for (let j = i + 1; j < notes.length; j++) {
    if (notes[j] > notes[indiceMin]) {
      indiceMin = j;
      nombreDeVerifications++;
    }
  }
  if (indiceMin !== i) {
    let temp = notes[i];
    notes[i] = notes[indiceMin];
    notes[indiceMin] = temp;
    nombreDEchanges++;
  }
  console.log("Étape " + (i + 1) + " : " + notes);
}