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

function genererEleves() {
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
  }
  return classe;
}

/////////////////////// Partie 2 ///////////////////////////

function afficherEleves(classe) {
  classe.forEach((element) => {
    console.log(element.prenom + " - " + element.moyenne);
  });
}

afficherEleves(genererEleves());

/////////////////////// Partie 3 ///////////////////////////

function trouverMoyenneMin(tableau, indexDepart) {
  let plusPetiteValeur = tableau[indexDepart].moyenne;
  let indicePlusPetiteValeur = indexDepart;
  for (let i = indexDepart + 1; i < tableau.length; i++) {
    if (tableau[i].moyenne < plusPetiteValeur) {
      plusPetiteValeur = tableau[i].moyenne;
      indicePlusPetiteValeur = i;
    }
  }
  return indicePlusPetiteValeur;
}

/////////////////////// Partie 4 ///////////////////////////

function trouverMoyenneMax(tableau, indexDepart) {
  let plusGrandeValeur = tableau[indexDepart].moyenne;
  let indicePlusGrandeValeur = indexDepart;
  for (let i = indexDepart + 1; i < tableau.length; i++) {
    if (tableau[i].moyenne > plusGrandeValeur) {
      plusGrandeValeur = tableau[i].moyenne;
      indicePlusGrandeValeur = i;
    }
  }
  return indicePlusGrandeValeur;
}

function afficherDonnees(tableau) {
  console.log("Taille de la classe : " + tableau.length);

  let indiceMin = trouverMoyenneMin(tableau, 0);
  let plusPetiteValeur = tableau[indiceMin].moyenne;
  let indiceMax = trouverMoyenneMax(tableau, 0);
  let plusGrandeValeur = tableau[indiceMax].moyenne;

  // Afficher les résultats
  console.log(
    "Plus petite Moyenne : " +
      plusPetiteValeur +
      ", Plus grande Moyenne : " +
      plusGrandeValeur
  );
}

/////////////////////// Partie 5 ///////////////////////////

function swap(tableau, indexA, indexB) {
  let temp = tableau[indexA];
  tableau[indexA] = tableau[indexB];
  tableau[indexB] = temp;
}

/////////////////////// Partie 6 ///////////////////////////

function triParSelection(tableau) {
  let nombreDeVerifications = 0;
  let nombreDEchanges = 0;
  for (let i = 0; i < tableau.length - 1; i++) {
    let indiceMin = trouverMoyenneMin(tableau, i);
    nombreDeVerifications++;
    if (indiceMin !== i) {
      swap(tableau, i, indiceMin);
      nombreDEchanges++;
    }
  }
  console.log("Nombre de comparaisons : " + nombreDeVerifications);
  console.log("Nombre d'échanges : " + nombreDEchanges);
}

/////////////////////// Partie 7 ///////////////////////////

let classe = genererEleves();
afficherEleves(classe);
afficherDonnees(classe);
triParSelection(classe);
console.log("Classe triée par moyenne croissante :");
afficherEleves(classe);