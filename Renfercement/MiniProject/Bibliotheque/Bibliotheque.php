<?php


require_once "Livre.php";

class Bibliotheque
{
    private $documents = [];
    private $tarifRetardJour;

    public function __construct($tarifRetardJour)
    {
        $this->tarifRetardJour = $tarifRetardJour;
    }

    public function ajouterDocument(Document $d)
    {
        $this->documents[] = $d;
    }

    public function getDisponibles()
    {
        return array_filter($this->documents, function ($d) {
            return $d->estDisponible() === true;
        });
    }

    public function calculerRetard(Document $d, $joursRetard)
    {
        if (!$d->estDisponible())
            return $joursRetard * $this->tarifRetardJour;
        return 0;
    }

    public function getResume()
    {
        $x = count($this->documents);
        $y = count($this->getDisponibles());
        return "x= " . $x . "\n"."y= " . $y;
    }
}

$b = new Bibliotheque(0.50);

$l1 = new Livre('1984', 'Orwell', 12.50, '978-2070368228');
$l2 = new Livre('1980', 'Orwell520', 32.50, '2070368228');

$m1 = new Magazine('Nat. Geographic', 'NGS', 5.99, 312);
$m2 = new Magazine('Nat. arabic', 'NTS', 6.99, 212);

$b->ajouterDocument($l1);
$l1->emprunter();

$b->getDisponibles();

echo $b->calculerRetard($l1, 5) . "\n";
echo $b->calculerRetard($l2, 5) . "\n";
echo $b->getResume() . "\n";
