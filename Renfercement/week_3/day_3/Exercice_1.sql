-- 1. LEFT JOIN — Tous les restaurants avec leur nombre de commandes (y compris ceux à 0 commande)
SELECT
    r.nom,
    COUNT(c.id) as total_comande
FROM
    restaurants r
    LEFT JOIN commandes c ON c.restaurant_id = r.id
GROUP BY
    r.id
    --- 2. LEFT JOIN + GROUP BY — Pour chaque livreur, afficher son nom et le nombre de livraisons effectuées (statut = 'livré'), même s'il n'en a aucune
SELECT
    u.nom,
    COUNT(c.id) as total
from
    utilisateurs u
    LEFT JOIN commandes c ON c.livreur_id = u.id
    AND c.statut = 'livré'
GROUP BY
    u.id
    --3. Sous-requête IN — Afficher les clients qui ont passé au moins une commande dont le total dépasse 30€
SELECT
    nom
from
    utilisateurs
WHERE
    id in (
        select
            client_id
        FROM
            commandes
        WHERE
            total > 30
    )
    --4. Sous-requête NOT IN — Afficher les restaurants qui n'ont reçu AUCUNE commande
SELECT
    nom
from
    restaurants
WHERE
    id not in (
        select
            restaurant_id
        from
            commandes
    )
    --5. GROUP BY + HAVING — Restaurants ayant reçu plus de 3 commandes ET un chiffre d'affaires total > 80€
select
    r.nom,
    sum(c.total) as chiffre,
    count(c.id) total_commande commandes
from
    restaurants r
    JOIN commandes c on c.restaurant_id = r.id
GROUP BY
    r.id
HAVING
    sum(c.total) > 80
    AND count(c.id) > 3;

--6. JOIN 3 tables + GROUP BY — Pour chaque client, son nom et la somme totale dépensée, triée du plus gros au plus petit
SELECT
    u.nom,
    sum(c.total) as total_deponse
from
    utilisateurs u
    join commandes c on c.client_id = u.id
GROUP BY
    u.id
ORDER BY
    total_deponse desc
    --7. Sous-requête EXISTS — Livreurs ayant au moins une notation > 4 (via la table notations et commandes)
SELECT
    nom
from
    utilisateurs
where
    EXISTS (
        select
            1
        from
            commandes c
            JOIN notations n on n.commande_id = c.id
        where
            c.livreur_id = u.id
            and n.note > 4
    );

-- 8. EXPLAIN — Lancez EXPLAIN sur la requête n°6 et identifiez si un index manque. Créez-le si nécessaire.
EXPLAIN
SELECT
    u.nom,
    sum(c.total) as total_deponse
from
    utilisateurs u
    join commandes c on c.client_id = u.id
GROUP BY
    u.id
ORDER BY
    total_deponse desc;

-- CREATE INDEX idx_client_id on cammandes(client_id)
-- Bonus:
-- A) Trouvez le plat le plus commandé (toutes commandes confondues) en croisant lignes_commande et plats
select
    p.nom,
    sum(l.quantite) as total
from
    plats p
    join lignes_commande l on l.plat_id = p.id
GROUP BY
    p.id,
    p.nom
ORDER BY
    total desc
LIMIT
    1
    ---------------------------------------
    -- B) Calculez le panier moyen par ville en croisant commandes et restaurants, uniquement pour les villes avec plus de 5 commandes
select
    r.nom,
    AVG(c.total) as moyen
from
    restaurants r
    join commandes c on c.restaurant_id = r.id
GROUP BY
    r.ville
HAVING
    COUNT(c.id) > 5