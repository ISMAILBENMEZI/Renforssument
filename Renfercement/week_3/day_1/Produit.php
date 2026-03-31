<?php

class Produit
{

    private $nom;
    private $prix;
    private $stock;

    public function __construct($nom, $prix, $stock)
    {
        $this->nom = $nom;
        $this->prix = $prix;
        $this->stock = $stock;
    }

    public function getNom()
    {
        return $this->nom;
    }
    public function getPrix()
    {
        return $this->prix;
    }
    public function getStock()
    {
        return $this->stock;
    }

    public function setPrix($prix)
    {
        if ($prix < 0) {
            echo "Prix invalide\n";
            return;
        }
        $this->prix = $prix;
    }

    public function setStock($stock)
    {
        if ($stock < 0) {
            echo "Stock invalide\n";
            return;
        }
        $this->stock = $stock;
    }

    public function afficher()
    {
        echo $this->nom . " — " . $this->prix . "€ (stock : " . $this->stock . ")\n";
    }
}


$objet1 = new Produit("orange", 50, 20);
$objet2 = new Produit("banana", 30, 10);

$objet1->afficher();
$objet2->afficher();

$objet1->setPrix(-5);

echo $objet1->getNom() . "\n";
echo $objet1->getPrix() . "\n";
echo $objet1->getStock() . "\n";
