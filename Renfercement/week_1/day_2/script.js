// ------------------------Exercice 1 -- Manipulation d'objet Débutant 8 min


const fiche = { prenom: 'Bob', nom: 'Dupont', age: 34, ville: 'Lyon' };


let complet = fiche.nom + " " + fiche.prenom;

// console.log(complet);

function getProp(obj, cl) {
    return obj[cl] !== undefined ? obj[cl] : "not found";
}

// console.log(getProp(fiche, 'ville'));

function renommerCle(obj, ancienne, nouvelle) {
    let nouvelObj = { ...obj };

    nouvelObj[nouvelle] = nouvelObj[ancienne];

    delete nouvelObj[ancienne];

    return nouvelObj;
}

const nouvelleFiche = renommerCle(fiche, 'ville', 'cite');

// console.log(nouvelleFiche);

// ------------------------------ Exercice 2 -- Parcourir un inventaire Débutant 8 min

const inventaire = {
    stylo: { prix: 1.5, stock: 200 },
    cahier: { prix: 3.5, stock: 85 },
    regle: { prix: 0.8, stock: 0 },
    compas: { prix: 8.5, stock: 12 },
};

const name = Object.keys(inventaire);

// console.log(name);6
// ---------------------

Object.entries(inventaire).forEach(([name, element]) => {
    console.log(`${name} => ${element.prix * element.stock}`);
});

// ---------------

const newObject = Object.fromEntries(
    Object.entries(inventaire).map(([name, element]) => [name, element.prix])
);

// console.log(newObject);

// -------------------------- Exercice 3 -- Déstructuration en pratique Débutant 8 min

const commande = {
    id: 'CMD-001',
    client: { nom: 'Dupont', email: 'dupont@mail.com' },
    total: 18.50,
    livree: false
};

const {id , totaal} = commande;

console.log(id);