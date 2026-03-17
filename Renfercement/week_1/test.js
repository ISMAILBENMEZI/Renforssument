let fruits = ['pomme' , 'banane', 'orange'];
// console.log(fruits);

let color = ['black' , 'red' , 'blue'];
// color.push('purple');

// console.log(color);
// console.log(color.length);

let user = {
    name:"ismail",
    age:"18",
    city:"marrakech",
};

// console.log(user.name);

let animals = ["dog" , "cat" , "elephant","tortoise"];

for(let i = 0; i<animals.length;i++)
{
    console.log(animals[i]);
}


let races = [
    {name:"orange" , prix:120},
    {name:"apple" , prix:100},
    {name:"watermilane" , prix:70},
];

totalPrix = 0;

for(let i = 0; i < races.length ; i++)
{
    totalPrix += races[i].prix;
}

// console.log(totalPrix);

// -------------------------

let products = {
    name:"apple",
    prix:100,
    categorie:"fruit",
}

// console.log(" le produit " +products.name+" coute "+products.prix+" categorie "+products.categorie);


 