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
    // console.log(`${name} => ${element.prix * element.stock}`);
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

const { id, total } = commande;

// console.log(id);
// ----------

const { client: { nom } } = commande;

// console.log(nom);
// -------------

const { total: montant, livree: eslivree } = commande;

// console.log(montant);
// --------------

function resumeCommande(id, client, total) {
    return `Commande ${id} - ${client}- ${total} EUR`;
}

// console.log(resumeCommande(id , nom , total));

// ----------------------- Exercice 4 -- CRUD sur un tableau d'objets Débutant 12 min


let catalogue = [
    { id: 1, nom: 'Stylo bille', prix: 1.20, stock: 150 },
    { id: 2, nom: 'Cahier A4', prix: 3.50, stock: 45 },
    { id: 3, nom: 'Surligneur A4', prix: 2.10, stock: 80 },
    { id: 4, nom: 'Post-it', prix: 3.80, stock: 60 },
    { id: 5, nom: 'Ciseaux', prix: 6.30, stock: 20 },
];

let produit = { nom: 'taha', prix: 7.30, stock: 40 }

function ajouterProduit(catalogue, produit) {
    let max = 0;

    catalogue.forEach(index => {
        if (index.id > max) {
            max = index.id;
        }
    })

    let id = max + 1;

    let newCatalogue = [...catalogue, { id, ...produit }];

    return newCatalogue;
}

let ct = ajouterProduit(catalogue, produit)
// console.log(ct);

// -------------

function rechercherParNom(catalogue, terme) {
    let find = catalogue.filter(m => m.nom.toLowerCase().includes(terme.toLowerCase()));
    return find;
}

// console.log(rechercherParNom(catalogue , 'i'));

// -------------

function modifierPrix(catalogue, id, nouveauPrix) {
    let nouveau = catalogue.map(m => m.id === id ? { ...m, prix: nouveauPrix } : m);
    return nouveau;
}

// console.log(modifierPrix(catalogue, 5, 500));

// --------------


function supprimerProduit(catalogue, id) {
    return catalogue.filter(item => item.id !== id);
}

// console.log(supprimerProduit(catalogue , 2));

// ----------------------- Exercice I1 -- Fusionner des objets sans écrasement Intermédiaire 20 min


function fusionProfonde(obj1, obj2) {
    let resultat = { ...obj1 };

    for (let key in obj2) {
        let valuer = obj2[key];

        if (key in resultat) {
            let valeur1 = resultat[key];
        }
    }
}

// ----------------------- Exercies 00 
const flotte = [
    { id: 1, marque: "Toyota", modele: "Yaris", cat: "citadine", prix_jour: 35, km: 42000, note: 4.2, disponible: true },
    { id: 2, marque: "Toyota", modele: "Corolla", cat: "berline", prix_jour: 55, km: 28000, note: 4.6, disponible: true },
    { id: 3, marque: "Renault", modele: "Clio", cat: "citadine", prix_jour: 30, km: 75000, note: 3.8, disponible: false },
    { id: 4, marque: "Renault", modele: "Megane", cat: "berline", prix_jour: 50, km: 15000, note: 4.8, disponible: true },
    { id: 5, marque: "Peugeot", modele: "208", cat: "citadine", prix_jour: 32, km: 60000, note: 4.0, disponible: true },
    { id: 6, marque: "Peugeot", modele: "3008", cat: "SUV", prix_jour: 80, km: 22000, note: 4.7, disponible: true },
    { id: 7, marque: "BMW", modele: "Serie 3", cat: "berline", prix_jour: 110, km: 8000, note: 4.9, disponible: true },
    { id: 8, marque: "BMW", modele: "X3", cat: "SUV", prix_jour: 130, km: 5000, note: 4.8, disponible: false },
    { id: 9, marque: "Ford", modele: "Kuga", cat: "SUV", prix_jour: 75, km: 38000, note: 4.3, disponible: true },
    { id: 10, marque: "Ford", modele: "Fiesta", cat: "citadine", prix_jour: 28, km: 90000, note: 3.6, disponible: true },
    { id: 11, marque: "Tesla", modele: "Model 3", cat: "berline", prix_jour: 95, km: 12000, note: 4.9, disponible: true },
    { id: 12, marque: "Tesla", modele: "Model Y", cat: "SUV", prix_jour: 115, km: 6000, note: 5.0, disponible: true },
    { id: 13, marque: "Volkswagen", modele: "Golf", cat: "berline", prix_jour: 58, km: 45000, note: 4.1, disponible: false },
    { id: 14, marque: "Volkswagen", modele: "Tiguan", cat: "SUV", prix_jour: 88, km: 19000, note: 4.5, disponible: true },
    { id: 15, marque: "Hyundai", modele: "Tucson", cat: "SUV", prix_jour: 70, km: 31000, note: 4.4, disponible: true },
];


// Q:1
function filterArray(flotte) {
    const NewArray = flotte.filter(car => car.disponible === true)
        .map(car => {

            const prix_5_jour = car.prix_jour * 5;
            const remise = car.km > 40000 ? 8 : 0;
            const prixFinal = prix_5_jour - (prix_5_jour * remise / 100);

            return {
                model: car.model,
                prix_5_jour: prix_5_jour,
                remise: remise + '%',
                prixFinal: prixFinal
            }

        });
    return NewArray;
}

// console.log(filterArray(flotte))

// ----------------------------------------
// Q:2

function groupCarByCategory(flotte) {
    let result = {};
    flotte.forEach(car => {
        const cat = car.cat;

        if (!result[cat]) {
            result[cat] = {
                nbTotal: 0,
                nbDisponibles: 0,
                prixTotal: 0,
                noteTotal: 0
            };

            result[cat].nbTotal += 1;

            if (car.disponible)
                result[cat].nbDisponibles += 1;

            result[cat].prixTotal += car.prix_jour;

            result[cat].prixTotal += car.prix_jour;

            result[cat].noteTotal += car.note;
        }
    });

    for (let cat in result) {
        result[cat].prixMoyen = result[cat].prixTotal / result[cat].nbTotal;

        result[cat].noteMoyen = Math.round((result[cat].noteTotal) / result[cat].nbTotal * 10) / 10;

        result[cat].tauxDispo = (result[cat].nbDisponibles / result[cat].nbTotal) * 100;
    }

    return result;
}

console.log(groupCarByCategory(flotte));
