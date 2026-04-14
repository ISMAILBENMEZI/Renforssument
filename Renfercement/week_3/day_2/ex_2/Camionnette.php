<!-- ✏ Exercice 2 — Catalogue de véhicules — Semi-autonome (30 min) -->

<?php

require_once "Vehicule.php";

class Camionnette extends Vehicule
{
    private $chargeUtile;

    public function getPrixFinal()
    {
        return $this->prixBase + ($this->chargeUtile * 0.10);
    }

    public function getDescription()
    {
        echo "Camionnette: " . "[marque: " . $this->marque . "] " . ",[modele: " . $this->modele . "], [annee: " . $this->annee . " ], [ Charge utile: " . $this->chargeUtile . " ] \n";
    }
}
