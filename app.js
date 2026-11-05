// Inventaire de la pépinière — point d'entrée : le menu.
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

function afficherAccueil() {
  console.log('==================================================');
  console.log('   INVENTAIRE DE LA PÉPINIÈRE');
  console.log('   Pépinière pédagogique');
  console.log('==================================================');
}

function afficherMenu() {
  console.log('--------------------- MENU ---------------------');
  console.log('1. Ajouter un plant');
  console.log('2. Lister l\'inventaire');
  console.log('3. Rechercher (code, nom, groupe)');
  console.log('4. Trier (nombre de plants)');
  console.log('5. Synthèse des quantités');
  console.log('0. Quitter');
}

function afficherErreurAction(erreur) {
  const message = String(erreur?.message ?? erreur ?? 'Erreur inconnue');
  if (message.startsWith('TODO')) {
    console.log(`À compléter : ${message}`);
    return;
  }
  console.log(`Erreur inattendue : ${message}`);
}

function afficherInventaire(inventaire) {
  console.log(`--- Inventaire (${inventaire.length} espèce(s)) ---`);
  console.log(listerPlants(inventaire));
}

async function ajouterDepuisConsole(inventaire) {
  console.log('--- Ajouter un plant ---');
  const code = await demander('Code du plant (ex. N11) : ');
  if (code === null) {
    return;
  }

  const nom = await demander('Nom commun (ex. papayer) : ');
  if (nom === null) {
    return;
  }

  const groupe = await demander('Groupe botanique (angiosperme ou gymnosperme) : ');
  if (groupe === null) {
    return;
  }

  const nombre = await demander('Nombre de plants (entier) : ');
  if (nombre === null) {
    return;
  }

  const date = await demander('Date du relevé (AAAA-MM-JJ) : ');
  if (date === null) {
    return;
  }

  const saisie = {
    id: String(code ?? '').trim().toUpperCase(),
    nomCommun: String(nom ?? '').trim().toLowerCase(),
    groupe: String(groupe ?? '').trim().toLowerCase(),
    nombrePlants: String(nombre ?? '').trim(),
    dateReleve: String(date ?? '').trim(),
  };

  const erreurs = ajouterPlant(inventaire, saisie);
  if (erreurs.length > 0) {
    console.log('Ajout refusé :');
    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
    console.log(`L'inventaire compte toujours ${inventaire.length} espèce(s).`);
    return;
  }

  try {
    await enregistrerJson(FICHIER_DONNEES, inventaire);
  } catch (erreur) {
    console.log(`Erreur inattendue : ${erreur.message}`);
    return;
  }

  console.log(`Plant ${saisie.id} ajouté. L'inventaire compte ${inventaire.length} espèce(s).`);
}

async function rechercherDepuisConsole(inventaire) {
  console.log('--- Rechercher ---');
  console.log('1. Par code');
  console.log('2. Par nom commun');
  console.log('3. Les espèces d\'un groupe botanique');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) {
    return;
  }

  if (sousChoix === '1') {
    const code = await demander('Code : ');
    if (code === null) {
      return;
    }
    const plant = trouverParId(inventaire, String(code).trim().toUpperCase());
    if (plant) {
      console.log(formaterPlant(plant));
    } else {
      console.log(`Plant ${String(code).trim().toUpperCase()} introuvable.`);
    }
    return;
  }

  if (sousChoix === '2') {
    const texte = await demander('Nom ou partie du nom : ');
    if (texte === null) {
      return;
    }
    const resultats = rechercherParNom(inventaire, texte);
    console.log(`${resultats.length} espèce(s) dont le nom contient « ${texte} » :`);
    if (resultats.length === 0) {
      console.log('Aucun plant enregistré.');
    } else {
      console.log(listerPlants(resultats));
    }
    return;
  }

  if (sousChoix === '3') {
    const groupe = await demander('Groupe (angiosperme ou gymnosperme) : ');
    if (groupe === null) {
      return;
    }
    const resultats = filtrerParGroupe(inventaire, String(groupe).trim().toLowerCase());
    console.log(`${resultats.length} espèce(s) du groupe ${String(groupe).trim().toLowerCase()} :`);
    if (resultats.length === 0) {
      console.log('Aucun plant enregistré.');
    } else {
      console.log(listerPlants(resultats));
    }
    return;
  }

  console.log('Choix inconnu : retour au menu.');
}

async function trierDepuisConsole(inventaire) {
  console.log('--- Trier ---');
  console.log('1. Par nombre de plants croissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) {
    return;
  }

  if (sousChoix === '1') {
    const resultats = trierParNombrePlants(inventaire);
    console.log(listerPlants(resultats));
    return;
  }

  console.log('Choix inconnu : retour au menu.');
}

async function syntheseDepuisConsole(inventaire) {
  console.log('--- Synthèse de l\'inventaire ---');
  console.log(`Nombre d'espèces : ${inventaire.length}`);
  console.log(`Stock total : ${totalPlants(inventaire)} plants`);
  console.log('Par groupe botanique :');
  const synthese = syntheseParGroupe(inventaire);
  const groupes = Object.entries(synthese);
  if (groupes.length === 0) {
    console.log('  Aucune donnée.');
  } else {
    for (const [groupe, donnees] of groupes) {
      console.log(`  ${groupe} : ${donnees.especes} espèce(s), ${donnees.plants} plants`);
    }
  }

  const plusAbondante = especeLaPlusAbondante(inventaire);
  if (plusAbondante === null) {
    console.log('Espèce la plus abondante : aucune donnée');
  } else {
    console.log(`Espèce la plus abondante : ${formaterPlant(plusAbondante)}`);
  }

  const faibles = stocksFaibles(inventaire, SEUIL_STOCK_FAIBLE);
  console.log(`Stocks faibles (≤ ${SEUIL_STOCK_FAIBLE} plants) : ${faibles.length}`);
  if (faibles.length > 0) {
    console.log(listerPlants(faibles));
  }
  console.log('Rappel : le seuil de 10 plants est un repère pédagogique de suivi, pas une recommandation de production.');
}

async function main() {
  ouvrirSaisie();
  let inventaire = [];

  try {
    inventaire = await chargerJson(FICHIER_DONNEES);
    if (!Array.isArray(inventaire)) {
      inventaire = [];
    }
    console.log(`${inventaire.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
  } catch (erreur) {
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. L'inventaire démarre vide.`);
    inventaire = [];
  }

  try {
    afficherAccueil();
    console.log(`${inventaire.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
    while (true) {
      afficherMenu();
      const choix = await demander('Votre choix : ');

      if (choix === null) {
        console.log('Au revoir !');
        break;
      }

      if (choix === '0') {
        console.log('Au revoir !');
        break;
      }

      if (choix === '1') {
        await ajouterDepuisConsole(inventaire);
        continue;
      }

      if (choix === '2') {
        afficherInventaire(inventaire);
        continue;
      }

      if (choix === '3') {
        await rechercherDepuisConsole(inventaire);
        continue;
      }

      if (choix === '4') {
        await trierDepuisConsole(inventaire);
        continue;
      }

      if (choix === '5') {
        await syntheseDepuisConsole(inventaire);
        continue;
      }

      console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
    }
  } catch (erreur) {
    afficherErreurAction(erreur);
  } finally {
    fermerSaisie();
  }
}

main();
