-- 1. Afficher le nom et l'email de tous les utilisateurs de type 'client'
select
    nom,
    email
from
    utilisateurs
where
    type = client;

-- 2. Afficher tous les plats dont le prix est inférieur à 15€, triés du moins cher au plus cher
select
    *
from
    plats
where
    prix < 50;

-- 3. Compter le nombre de commandes par statut ('livré', 'en cours', 'annulé')
SELECT
    statut,
    COUNT(*)
from
    commandes
GROUP BY
    statut;

-- 4. Afficher les 3 restaurants avec la meilleure note moyenne (ORDER BY + LIMIT)
SELECT
    *
from
    restaurants
ORDER BY
    note_moy DESC
LIMIT
    3;

-- 5. Calculer le chiffre d'affaires total et le panier moyen de toutes les commandes livrées
select
    sum(total) as max_total,
    AVG(total) as moyen
from
    commandes
where
    statut = 'livre';

-- 6. Afficher tous les plats dont le nom contient le mot 'poulet' (LIKE)
SELECT
    nom
from
    plats
where
    nom like '%poulet%';

-- ✏ Exercice 2 — Jointures — Application de livraison (semi-autonome)
--7. Afficher le nom du client et le total pour chaque commande (INNER JOIN commandes + utilisateurs)
select
    u.nom,
    c.total
from
    utilisateurs u
    join commandes c ON u.id = c.client_id;

--8. Afficher le nom du restaurant et le nombre de commandes reçues, même pour les restaurants sans commande (LEFT JOIN)
select
    r.nom,
    COUNT(c.id)
from
    restaurants r
    LEFT JOIN commandes c ON c.restaurant_id = r.id
GROUP BY
    r.id,
    r.nom;

-- 9. Lister toutes les commandes livrées avec le nom du client, le nom du livreur et le nom du restaurant
select
    m.id,
    u_client.nom as client,
    u_livreur.nom as livreur,
    r.nom as restaurant
from
    commandes m
    JOIN utilisateurs u_client on u_client.id = m.client_id
    join utilisateurs u_livreur on u_livreur.id = m.livreur_id
    join restaurants r on r.id = m.restaurant_id
where
    m.statut = 'livre';

--10.Afficher les plats commandés au moins une fois avec leur quantité totale vendue (JOIN + GROUP BY + SUM)
select
    p.nom,
    SUM(lc.quantite) as total_quantite
from
    plats p
    join lignes_commandes lc on lc.plat_id = p.id
GROUP BY
    p.nom,
    p.id;

--11. Trouver les clients qui ont commandé plus de 3 fois, avec leur nombre de commandes (JOIN + GROUP BY + HAVING)
select
    u.nom,
    count(c.id)
from
    utilisateurs u
    join commandes c on c.client_id = u.id
GROUP BY
    u.id,
    u.nom
having
    count(c.id) > 3

-- 12.BONUS : Afficher le top 3 des livreurs les mieux notés (jointure sur notations + commandes + utilisateurs)
select
    u.nom as livreur,
    avg(n.note) as moyen
from
    notations n
    join commandes m on m.id = n.commande_id
    join utilisateurs u on m.livreur_id = u.id
GROUP BY
    u.id , u.nom
ORDER BY
    moyen desc
LIMIT
    3