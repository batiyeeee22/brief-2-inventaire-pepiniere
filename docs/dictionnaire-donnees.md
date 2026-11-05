# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Code unique identifiant l'espèce dans l'inventaire | texte | obligatoire et absent des autres enregistrements | — | `N09` |
| `nomCommun` | Nom commun de l'espèce | texte | obligatoire | — | `pin` |
| `groupe` | Groupe botanique de l'espèce, établi à partir de la fiche de référence | texte | valeur autorisée : `angiosperme` ou `gymnosperme` | — | `gymnosperme` |
| `nombrePlants` | Quantité disponible pour cette espèce | nombre entier | entier positif ou nul | plants | `8` |
| `dateReleve` | Date du comptage des plants | texte au format `AAAA-MM-JJ` | date réelle au format `AAAA-MM-JJ` | — | `2026-10-24` |

**Listes de valeurs autorisées** : `groupe` accepte uniquement `angiosperme` et `gymnosperme`. Les quantités sont des entiers positifs ou nuls ; la date doit exister au calendrier et respecter le format `AAAA-MM-JJ`.

**Sources** : `SUJET.md` pour la signification des champs et les règles de validation ; `donnees/plants.json` pour les exemples réels du jeu de données. Le fichier contient 10 enregistrements fictifs, tous datés du `2026-10-24`. La classification des groupes est fournie et validée par le coach agronomie, à partir de la fiche botanique de référence.
 