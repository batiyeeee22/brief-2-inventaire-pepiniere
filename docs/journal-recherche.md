# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Comment poser une question au clavier et attendre la réponse | `fiches/3-ajouter-lister.md`, `src/saisie.js` et explication d'un assistant IA (Copilot) | `demander()` affiche une question et renvoie la réponse. `await` attend cette réponse. La fonction peut renvoyer `null` si la saisie est interrompue. | Dans `app.js`, pour demander les choix du menu et les informations d'un plant. |
| Comment lire et enregistrer les données JSON | `fiches/2-donnees-json.md`, `src/stockage.js` et explication d'un assistant IA (Copilot) | `JSON.parse()` transforme le texte JSON en données JavaScript. `JSON.stringify()` transforme les données en texte pour les enregistrer. `await` attend la fin de la lecture ou de l'écriture. | Au démarrage du programme et après l'ajout d'un plant. |
| Comment chercher et trier des éléments dans un tableau | `fiches/4-rechercher-trier.md`, `src/recherche.js` et explication d'un assistant IA (Copilot) | `filter()` garde les éléments qui correspondent à un critère. `sort()` trie les éléments ; faire une copie avant le tri permet de garder l'inventaire d'origine dans son ordre. | Recherche par nom ou groupe et tri des plants. |
| Pourquoi importer une constante ne l'affiche pas à l'écran | Mon code dans `app.js` et explication d'un assistant IA (Copilot) | `import` rend une valeur disponible dans le fichier, mais ne l'affiche pas. Pour la montrer, il faut l'utiliser avec `console.log()` ou dans une question posée à l'utilisateur. | Import de `GROUPES` et affichage des choix de groupe. |
