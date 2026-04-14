<!-- ✏ Exercice 2 — Catalogue de véhicules — Semi-autonome (30 min) -->

<?php

require_once "Vehicule.php";

class Moto extends Vehicule
{

    public function getPrixFinal()
    {
        if ($this->annee < 2020)
            return ($this->prixBase * 95) / 100;
        return $this->prixBase;
    }

    public function getDescription()
    {
        echo "Moto: " . "[marque: " . $this->marque . "] " . ",[modele: " . $this->modele . "], [annee: " . $this->annee . " ]\n";
    }
}
