<?php

abstract class Document
{
    protected $titre;
    protected $auteur;
    protected $prix;
    protected $disponible;

    public function __construct($titre, $auteur, $prix, $disponible)
    {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->prix = $prix;
        $this->disponible = $disponible;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function getAuteur()
    {
        return $this->auteur;
    }

    public function getPrix()
    {
        return $this->prix;
    }

    abstract public function estDisponible();
    abstract public function emprunter();
    abstract public function getDescription();
}
