<!-- ✏ Exercice 2 — Classe Compte bancaire — Semi-autonome (30 min) -->
<?php

class CompteBancaire
{
    private $titulaire;
    private $iban;
    private $solde;

    public function __construct($titulaire, $iban, $solde = 0)
    {
        $this->titulaire = $titulaire;
        $this->iban = $iban;
        $this->solde = $solde;
    }

    public function getTitulaire()
    {
        return $this->titulaire;
    }

    public function getIban()
    {
        return $this->iban;
    }

    public function getSolde()
    {
        return $this->solde;
    }

    public function deposer($montant)
    {
        if ($montant <= 0) {
            echo "Invalide Montant \n";
            return;
        }

        $this->solde += $montant;
    }

    public function retirer($montant)
    {
        if ($montant <= 0) {
            echo "Invalide Montant \n";
            return;
        }

        if ($this->solde < $montant) {
            echo "Solde insuffisant \n";
            return;
        }

        $this->solde -= $montant;
    }

    public function afficherInfos()
    {
        echo "votre nom: " . $this->titulaire . " et votre IBAN : " . $this->iban . " Votre Solde: " . $this->solde . "\n";
    }
}

$account1 = new CompteBancaire("ismail" , 123 , 150);
$account2 = new CompteBancaire("brahim" , 132 , 100);

$account1->deposer(-20);
$account2->deposer(20);

$account1->retirer(-20);
$account2->retirer(80);


$account1->afficherInfos();
$account2->afficherInfos();


