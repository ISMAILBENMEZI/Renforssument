<!-- ✏ Exercice 2 — Catalogue de véhicules — Semi-autonome (30 min) -->

<?php

abstract class Vehicule
{
    protected $marque;
    protected $modele;
    protected $annee;
    protected $prixBase;

    public function __construct($marque , $modele, $annee, $prixBase)
    {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->annee = $annee;
        $this->prixBase = $prixBase;
    }

    abstract public function getPrixFinal();
    abstract public function getDescription();

}
