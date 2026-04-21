<?php

include 'Document.php';

class Livre extends Document
{
    private $isbn;

    public function __construct($titre, $auteur, $prix, $isbn)
    {
        parent::__construct($titre, $auteur, $prix, true);
        $this->isbn = $isbn;
    }

    public function getISBN()
    {
        return $this->isbn;
    }

    public function getDescription()
    {
        return "Livre: " . $this->titre . " --- " . $this->auteur . " Prix: " . $this->prix . " ISBN: " . $this->isbn;
    }
}


$l1 = new Livre('1984', 'Orwell', 12.50, '978-2070368228');

echo $l1->getDescription() . "\n";

var_dump($l1->estDisponible());
