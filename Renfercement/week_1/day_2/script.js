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

function rechercherParNom(catalogue, terme)
{
    let find = catalogue.filter(m => m.nom.toLowerCase().includes(terme.toLowerCase()));
    return find;
}

// console.log(rechercherParNom(catalogue , 'i'));

// -------------

function modifierPrix(catalogue, id, nouveauPrix)
{
    let nouveau = catalogue.map(m => m.id === id ?{...m , prix:nouveauPrix}: m);
    return nouveau;
}

// console.log(modifierPrix(catalogue, 5, 500));

// --------------


function supprimerProduit(catalogue, id){
    return catalogue.filter(item => item.id !== id);
}

// console.log(supprimerProduit(catalogue , 2));
