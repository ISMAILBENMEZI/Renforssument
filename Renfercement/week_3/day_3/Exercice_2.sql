-- 9. Pour chaque livreur, afficher : nom, nombre total de livraisons, montant total livré, note moyenne reçue (LEFT JOIN sur notations via commandes)
select
    u.nom,
    count(c.id),
    sum(c.total),
    avg(n.note)
from
    utilisateurs u
    left join commandes c on c.livreur_id = u.id
    and c.statut = 'livré'
    left join notations n on n.commande_id = c.id
GROUP BY
    u.id,
    u.nom
    --10.Identifier les livreurs 'stars' : ceux ayant plus de 2 livraisons effectuées ET une note moyenne >= 4 (GROUP BY + HAVING sur jointure 4 tables)
select
    u.nom,
    COUNT(c.id) AS total_livraisons,
    AVG(n.note) AS moyenne_notes
from
    utilisateurs u
    join commandes c on c.livreur_id = u.id
    join notations n on n.commande_id = c.id
GROUP BY
    u.nom,
    u.id
having
    avg(n.note) > 4
    and count(c.id) > 2;

-- 11. Livreurs inactifs : ceux qui n'ont AUCUNE commande avec statut 'livré' ce mois-ci (NOT EXISTS ou NOT IN avec filtre sur created_at)
SELECT
    u.nom
from
    utilisateurs u
where
    not EXISTS (
        SELECT
            1
        from
            commandes c
        where
            statut = 'livré'
            and MONTH (created_at) = MONTH (CURRENT_DATE)
            and YEAR (created_at) = YEAR (CURRENT_DATE)
            and c.livreur_id = u.id
    )
    ----------------------------
    --12.Classer les livreurs par taux de succès : (nb commandes 'livré' / nb commandes totales) * 100, uniquement pour ceux ayant au moins 3 commandes
select
    u.nom,
    count(c.id) as all_comande,
    count(
        case
            WHEN c.statut = 'livre' then 1
        end
    ) as commande_livre,
    (
        count(
            case
                when c.statut = 'livre' then 1
            end
        ) * 100 / count(c.id)
    ) as total
from
    utilisateurs u
    join commandes c on c.livreur_id = u.id
GROUP BY
    u.nom,
    u.id
having
    count(c.id) > 3
    ------------------------
    --13.Pour chaque restaurant, afficher la note moyenne des notations laissées par les clients (via commandes → notations), avec au moins 1 notation
select
    r.nom,
    avg(n.note)
from
    restaurants r
    join commandes c on c.restaurant_id = r.id
    join notations n on n.commande_id = c.id
GROUP BY
    r.id,
    r.nom
having
    count(n.id) >= 1
    --14.EXPLAIN sur la requête n°1 — identifier les colonnes sans index et créer les index manquants
    EXPLAIN
SELECT
    r.nom,
    COUNT(c.id) AS total_commandes
FROM
    restaurants r
    LEFT JOIN commandes c ON c.restaurant_id = r.id
GROUP BY
    r.id,
    r.nom;

-- CREATE INDEX idx_restaurant_date
-- ON commandes(restaurant_id, created_at);
