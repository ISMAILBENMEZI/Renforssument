// ------------------------- Exercice 1 -- Ma premiere liste

let taches = [];

taches.push('Coder', 'Tester', 'Deployer');

taches.unshift('Analyser');

taches.pop();

taches.shift();

taches.splice(1, 0, 'Documenter');

taches.splice(2, 1, 'Revue de code')

// console.log(taches);
// -----------------------Exercice 2 -- Affichage d'une liste

const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];


prenoms.forEach((name, index) => {
    // console.log(`[${index}] => ${name}`);
});

const charLenght = [];

prenoms.forEach((name) => {
    charLenght.push(name.length);
});

// console.log(charLenght);

prenoms.forEach((name) => {
    if (name.length > 3) {
        // console.log(name);
    }
});

// ---------------------Exercice 3 -- Transformation de donnees

const temperatures = [0, 15, 22, 35, -5, 100];

const Fahrenheit = temperatures.map(f => f * 9 / 5 + 32);

let descriptions = [];

descriptions = Fahrenheit.map(f => {
    if (f >= 30) {
        return 'Chaud';
    }
    else if (f < 0) {
        return 'Froid';
    }
    else {
        return 'Tempere';
    }
});

let celsius = [];

fahrenheitDescriptions = Fahrenheit.map((f, index) => {
    return { celsius: f, status: descriptions[index] }
});

// console.log(celsius);

// ----------------------------Exercice 4 -- Filtrage simple

const mots = ['chat', 'cheval', 'chien', 'lion', 'chameau', 'cobra', 'loup', 'chevre'];


let motsFilterCh = mots.filter(m => {
    if (m.startsWith('ch'))
        return m;
});

let motsPlus5 = mots.filter(m => m.length > 5);

let motsChPlus5 = motsFilterCh.filter(m => m.length > 5);

// console.log(motsChPlus5);

// ---------------------------Exercice 5 -- Recherche dans un catalogue

const catalogue = [
    { ref: 'A01', nom: 'Stylo bille', prix: 1.20 },
    { ref: 'A02', nom: 'Cahier A4', prix: 3.50 },
    { ref: 'A03', nom: 'Surligneur', prix: 2.10 },
    { ref: 'A04', nom: 'Post-it', prix: 3.80 },
    { ref: 'A05', nom: 'Ciseaux', prix: 6.30 },
];

catalogue.find(c => c.ref === 'A03');

catalogue.findIndex(c => c.nom === "Cahier A4");

let notFound = catalogue.find(c => c.ref == "A99") ?? "not found";

// console.log(notFound);

// -----------------------------Exercice 6 -- Premiers calculs avec reduce

const notes = [14, 8, 17, 11, 15, 9, 18, 12];


const sum = notes.reduce((acc, n) => acc + n, 0);

const moyen = sum / notes.length;

const max = notes.reduce((acc, n) => n > acc ? n : acc, notes[0]);

let maxLength = 0;

const maxMoyen = notes.reduce((acc, n) => n > moyen ? acc + 1 : acc, 0);

// console.log(maxMoyen);

// -----------------------------Exercice 7 -- Tris simples 

const scores = [45, 12, 78, 3, 99, 56, 23, 67];
const noms = ['Zoe', 'Alice', 'Marc', 'Bob', 'Yasmine', 'Chloe'];


scores.sort((a, b) => a - b);

scores.sort((a, b) => b - a);

noms.sort((a, b) => a.localeCompare(b));

scores.sort((a, b) => b - a).slice(0, 3);

// console.log(scores.sort((a , b) =>  b - a).slice(0,3));

// --------------------------Exercice 8 -- Spread et Destructuration 

// Partie A -- Spread


let fruits = ['pomme', 'poire'];
let legumes = ['carotte', 'tomate'];

let fusion = [...fruits, ...legumes];

let copiePanier = [...legumes];
copiePanier.push('cerise');

let Numbers = [3, 1, 4, 1, 5, 9, 2, 6];

let maxNumber = Math.max(...Numbers);
let minNumber = Math.min(...Numbers);

// console.log(minNumber);

// Partie B -- Destructuration

let couleurs = ['rouge', 'vert', 'bleu', 'jaune'];

let [premiere, deuxieme, ...autresCouleurs] = couleurs;

// console.log(autresCouleurs);

let x = 10;
let y = 20;


[x, y] = [y, x];

// console.log(x , y)
const data = [64];
const [val, uinte = 'kg'] = data;

// ------------------------Exercice I1 -- Nettoyeur de tableau Intermediaire 


// tableau = [3, 1, 2, 1, 3, 0, '', 5, null, 2];

function nettoyer(tableau) {

    // let newTable = tableau.filter(n => typeof n === "number");

    // let value = 0 ;
    // newTable = newTable.filter(n => n !== value);

    let newTable = tableau.filter(n => n);

    newTable = newTable.filter(function (n, index) {
        return newTable.indexOf(n) === index;
    })


    // newTable = newTable.filter((n, index) => !newTable.includes(n, index + 1));

    newTable.sort((a, b) => a - b);

    return newTable
}

// console.log(nettoyer(tableau));

// -----------------------------Exercice I2 -- Rotation de tableau Intermediaire 
// let tableau = [1, 2, 3, 4, 5];
let n = 7;

function rotate(tableau, n) {
    let rotated = tableau;

    if (n > tableau.length)
        n = n % tableau.length;

    if (n <= 0)
        return tableau;

    for (let i = 0; i < n; i++) {
        rotated = [rotated[rotated.length - 1], ...rotated.slice(0, -1)];
    }

    return rotated;
}

// console.log(rotate(tableau, n));

// -------------------------Exercice I3 -- Aplatisseur
let arr = [1, [2, 3], [4, [5, 6]]];

function flatten(tableau){
    return tableau.flat(Infinity);
}

// console.log(flatten(arr));
// ----------------------------Exercice I4 -- Intersection et Difference Intermediaire 
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4, 6];
function intersection(a, b) {
    let arr3 = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                arr3.push(a[i]);
            }
        }
    }

    return arr3;
}

function difference(a, b) {
    let arr3 = [];

    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            arr3.push(a[i]);
        }
    }

    return arr3;
}

// console.log(difference(arr1 , arr2));

// ---------------------------------- Exercice I5 -- Grouper par cle Intermediaire
const produits = [
    { nom: 'Stylo', categorie: 'ecriture', prix: 1.5 },
    { nom: 'Cahier', categorie: 'papier', prix: 3.5 },
    { nom: 'Feutre', categorie: 'ecriture', prix: 2.0 },
    { nom: 'Post-it', categorie: 'papier', prix: 3.8 },
    { nom: 'Ciseaux', categorie: 'bureau', prix: 6.5 },
];

function groupBy(tableau, cle) {
    let result = {};

    tableau.forEach(element => {
        let key = element[cle];

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(element);
    })

    return result;
}

// console.log(groupBy(produits, 'categorie'));

// ---------------------------------  Exercice A1 -- Anagrammes Avance 25 min

let word1 = 'listen';
let word2 = 'silent';

// function sontAnagrammes(word1, word2) {
//     if (word1.length !== word2.length)
//         return false;

//     for (let i = 0; i < word1.length; i++) {
//         let found = 0;

//         for (let j = 0; j < word2.length; j++) {
//             if (word1[i] === word2[j]) {
//                 found = 1;
//                 break;
//             }
//         }

//         if (found === 0)
//             return false;
//     }
//     return true;
// }

function sontAnagrammes(word1, word2) {
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}

// console.log(sontAnagrammes(word1, word2));

// console.log(word1.split(''));
// console.log(word1.split('').sort().join(''));

let words = ['ate', 'eat', 'tea', 'tan', 'nat', 'bat'];

function grouperAnagrammes(words) {
    let map = {};

    words.forEach(word => {
        const key = word.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(word);
    });

    return Object.values(map);
}

// console.log(grouperAnagrammes(words));
//  ------------------------------Exercice A2 -- Sous-tableaux consecutifs Avance 25 min
let array = [1, 4, 2, 9, 7, 3, 8];
let num = 3;

function maxSommeConsecutive(array, num) {
    let max = 0;

    for (let i = 0; i < array.length - num; i++) {
        let sum = 0;

        for (let j = 0; j < num; j++) {
            sum += array[i + j];
        }

        if (sum > max)
            max = sum;
    }

    return max;
}

// console.log(maxSommeConsecutive(array , num));


// ----------------------------- Exercice A3 -- Pipeline de transformations Avance 30 min

const commandes = [
    { id: 1, client: 'Alice', montant: 120, statut: 'livree' },
    { id: 2, client: 'Bob', montant: 45, statut: 'annulee' },
    { id: 3, client: 'Alice', montant: 300, statut: 'livree' },
    { id: 4, client: 'Clara', montant: 80, statut: 'livree' },
    { id: 5, client: 'Bob', montant: 200, statut: 'livree' },
    { id: 6, client: 'Clara', montant: 15, statut: 'annulee' },
];

function pipeline(tableau, ...transformations) {
    return transformations.reduce((acc, fn) => fn(acc), tableau);
}

const result = pipeline(commandes,
    array => array.filter(c => c.statut === 'livree'),
    array => array.filter(m => m.montant > 50),
    array => array.sort((a, b) => b.montant - a.montant),
    array => array.map(c => ({ client: c.client, montant: c.montant })),
)

console.log(result);