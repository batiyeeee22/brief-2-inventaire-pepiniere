# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. Stock total : 30+45+20+50+25+18+12+22+8+10 = 240 ; 
plants angiosperme : 30+45+20+50+25+18+12+22 = 222 ; 
plants gymnosperme : 10+8 = 18.

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action                    | Attendu                     | Obtenu                      | Testeur:  |
| ------------------------- | --------------------------- | --------------------------- | -------                   |
| Calcul du stock total     |         240                  |        240                 |  DIBY konan Francois Ebenezer                  |
| Total espèces angiosperme |        8                    |       8                       |      DIBY konan Francois Ebenezer                     |
| Total plants angiosperme  |        222                     |      222                          |     DIBY konan Francois Ebenezer                      |
| Total espèces gymnosperme |         2                    |            2                  |       DIBY konan Francois Ebenezer                 |
| Total plants gymnosperme  |          18                   |          18                    |       DIBY konan Francois Ebenezer                    |
| Stock faible              |           N09 et N10                  |      N09 ET N10                       |    DIBY konan Francois Ebenezer                       |
| Espèce la plus abondante  |                  N04           |                N04              |             DIBY konan Francois Ebenezer              |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
