# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte
L'outil est utilisé par un responsable de pépinière pédagogique (assistant de pépinière). Son geste professionnel consiste à observer les étiquettes et les organes des plantes, appliquer une classification botanique simple, puis compter les quantités disponibles. Son besoin est de structurer un inventaire dispersé pour retrouver facilement une espèce et voir les quantités. L'utilisateur saisit l'origine du relevé (étiquette, photo ou spécimen), l'espèce, le groupe botanique, ainsi que les quantités de plants. Le programme affiche un menu principal textuel permettant de lister, d'ajouter, de rechercher, de trier les plantes ou d'afficher une synthèse des quantités, tout en indiquant le nombre d'espèces chargées depuis les données. L'outil ne gère pas les identifications incertaines de manière automatisée et nécessite que les cas douteux soient signalés directement.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/plants.json`
- [x] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [x] Lister l'inventaire, message si l'inventaire est vide
- [x] Rechercher par code ou par nom ; filtrer par groupe botanique
- [x] Trier par nombre de plants
- [x] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [x] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [x] Bonus : tri décroissant, groupe le plus fourni

## Données

✏️ *Le fichier, le nombre de lignes, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), l'unité. Rappelez qu'elles sont fictives et que les groupes sont fournis par le coach.*

## Limites

✏️ *Au moins trois. Par exemple : le seuil de 10 plants est un repère de suivi, pas une recommandation de production.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Astrid Malory Batiyé Koffi, batiyeeee22. Entraide : avec qui, sur quoi.*
