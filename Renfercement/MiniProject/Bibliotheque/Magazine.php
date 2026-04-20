<?php

include "Document.php";


class Magazine extends Document
{
    private $numero;

    public function __construct($titre, $auteur, $prix, $numero)
    {
        parent::__construct($titre, $auteur, $prix, true);
        $this->numero = $numero;
    }

    public function getNumero()
    {
        return $this->numero;
    }

    public function estDisponible()
    {
        return $this->disponible;
    }

    public function emprunter()
    {
        $this->disponible = false;
    }

    public function getDescription()
    {
        echo "[Magazine] " . $this->titre . " -- " . $this->auteur . " (" . $this->prix . ") " . " | N°" . $this->numero. "\n";
    }
}

$m = new Magazine('Nat. Geographic', 'NGS', 5.99, 312);
$m->getDescription();
$m->emprunter();
var_dump($m->estDisponible());
