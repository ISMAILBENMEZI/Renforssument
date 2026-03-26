CREATE DATABASE Bibliotheque;

CREATE TABLE
    members (
        id INT PRIMARY KEY,
        nom VARCHAR,
        role ENUM (Bibliothecaire, Adherent),
    );

CREATE TABLE
    categories (id INT, nom VARCHAR,);

CREATE TABLE
    livres (
        id INT,
        titre VARCHAR,
        categorie_id INT,
        FOREIGN KEY (categorie_id) REFERENCES categories (id),
    );

CREATE TABLE
    exemplaires (
        id INT,
        etat VARCHAR,
        livre_id INT,
        FOREIGN KEY (livre_id) REFERENCES livre (id),
        ON DELETE CASCADE
    );

CREATE TABLE
    emprunts (
        id INT PRIMARY KEY,
        date_debut DATE,
        date_retour_prevue DATE,
        date_retour DATE,
        member_id INT,
        exemplaire_id INT,
        FOREIGN KEY (member_id) REFERENCES member (id),
        FOREIGN KEY (exemplaire_id) REFERENCES exemplaire (id),
    );