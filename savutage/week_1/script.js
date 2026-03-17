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

catalogue.find (c => c.ref === 'A03');

catalogue.findIndex (c => c.nom === "Cahier A4");

let notFound = catalogue.find(c => c.ref == "A99") ?? "not found";

// console.log(notFound);

// -----------------------------Exercice 6 -- Premiers calculs avec reduce

const notes = [14, 8, 17, 11, 15, 9, 18, 12];


const sum = notes.reduce((acc , n) => acc + n , 0);

const moyen = sum / notes.length ;

const max = notes.reduce((acc , n) => n > acc ? n : acc, notes[0]);

let maxLength = 0 ;

const maxMoyen = notes.reduce((acc , n) => n > moyen ? acc + 1 : acc ,  0 );

// console.log(maxMoyen);

// -----------------------------Exercice 7 -- Tris simples 

const scores = [45, 12, 78, 3, 99, 56, 23, 67];
const noms = ['Zoe','Alice','Marc','Bob','Yasmine','Chloe'];


scores.sort((a , b) => a - b);

scores.sort((a , b) => b - a);

noms.sort((a , b) => a.localeCompare(b));

scores.sort((a , b) => b - a).slice(0,3);

// console.log(scores.sort((a , b) =>  b - a).slice(0,3));

// --------------------------Exercice 8 -- Spread et Destructuration 

// Partie A -- Spread


let fruits = ['pomme','poire'];
let  legumes=['carotte','tomate'];

let fusion = [...fruits , ...legumes];

let copiePanier = [...legumes];
copiePanier.push('cerise');

let Numbers = [3,1,4,1,5,9,2,6] ;

let maxNumber = Math.max(...Numbers);
let minNumber = Math.min(...Numbers);

// console.log(minNumber);

// Partie B -- Destructuration

let couleurs=['rouge','vert','bleu','jaune'];

let [premiere , deuxieme, ...autresCouleurs] = couleurs;

// console.log(autresCouleurs);

let x = 10;
let y = 20;


[x,y] = [y,x];

// console.log(x , y)
const data = [64];
const [val, uinte = 'kg'] = data;


