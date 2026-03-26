CREATE DATABASE Reseau_social;

CREATE Table
    users (
        id INT PRIMARY KEY,
        name VARCHAR,
        email VARCHAR,
        type ENUM (gratuit, premium),
    );

CREATE table
    profiles (
        id int PRIMARY KEY,
        photo VARCHAR,
        description text,
        user_id int,
        FOREIGN KEY (user_id) REFERENCES users (id),
    );

CREATE table
    competences (
        id int PRIMARY KEY,
        name VARCHAR,
        profile_id int,
        FOREIGN KEY (profile_id) REFERENCES profiles (id),
        ON DELETE CASCADE,
    );

CREATE table
    experiences (
        id int PRIMARY KEY,
        titre VARCHAR,
        entreprise VARCHAR,
        date_debut DATE,
        date_fin DATE,
        profile_id INT,
        FOREIGN KEY (profile_id) REFERENCES profiles (id),
        ON DELETE CASCADE,
    );

CREATE Table
    posts (
        id INT PRIMARY KEY,
        date_p DATE,
        contenu VARCHAR,
        user_id int,
        FOREIGN KEY (user_id) REFERENCES users (id),
        ON DELETE CASCADE,
    );

CREATE table
    commentaires (
        id int PRIMARY KEY,
        contenu VARCHAR,
        date_poste DATE,
        post_id int,
        FOREIGN KEY (post_id) REFERENCES posts (id),
        ON DELETE CASCADE,
    );

CREATE Table
    like (
        id int PRIMARY KEY,
        post_id int,
        FOREIGN KEY (post_id) REFERENCES posts (id),
        ON DELETE CASCADE,
    );

CREATE Table
    amis (
        user_id INT ami_id,
        INT FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (ami_id) REFERENCES users (id),
        PRIMARY KEY (user_id, ami_id)
    )