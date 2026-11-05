# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : ✏️

1. **Une fonction que j'ai écrite**, et comment elle marche : `afficherMenu` affiche les choix proposés dans le terminal. Elle utilise plusieurs appels à `console.log()`, chacun affichant une ligne. Le programme appelle cette fonction avant de demander à l'utilisateur de choisir une action.
2. **Une difficulté, et sa solution** : J'ai eu du mal à comprendre pourquoi il fallait écrire `await` devant `demander()`. Cette fonction attend la réponse saisie au clavier. Sans `await`, le programme risque de continuer avant d'avoir reçu la réponse. Pour résoudre ce problème, j'ai lu le fichier `src/saisie.js`, puis j'ai testé les questions une par une dans le menu. J'ai aussi vérifié le cas où `demander()` renvoie `null`, par exemple si la saisie est interrompue.
3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) :
Diby konan F. Ebenezer pour faire l'ecriture des fonction dans synthese et bien d'autres
Kroman J. Samuel l'initialisation du code dans appjs
KAMAGATE Abdalah comprehensions de certaines fonctions JavaScript

