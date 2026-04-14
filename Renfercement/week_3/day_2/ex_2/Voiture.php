<!-- ✏ Exercice 2 — Catalogue de véhicules — Semi-autonome (30 min) -->

<?php

require_once "Vehicule.php";

class Voiture extends Vehicule
{

    public function getPrixFinal()
    {
        return $this->prixBase + 150;
    }

    public function getDescription()
    {
        echo "Voiture: " . "[marque: ". $this->marque ."] ". ",[modele: " . $this->modele . "], [annee: " . $this->annee . " ]\n";
    }
}
