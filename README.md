# Bases de données en NSI

Projet de groupe qui consiste en la création d'un site web qui présente les données d'une base de donnés.

## Le Milanote
Voici le [lien du Milanote du projet](https://app.milanote.com/1R1bLl1jg9iG08?p=9saFPKayz58) si vous avez des choses à ajouter.

## Règles de base
### Les branches
Chacun sa branche, ne jamais aller sur celle de quelqu'un d'autre. Seul le Scrum Master a accès à la branche `dev` et à la branche `master`.

### Envoyer du code
Lorsque vous avez fini d'implémenter une fonctionnalité, assurez vous de ne laisser aucun bug. Envoyez un message au Scrum Master pour que votre code soit envoyé dans la branche principale.

### Si problème
Si vous rencontrez un problème lors de la conception d'une fonctionnalié, envoyez un message dans le groupe de discussion et on vous aidera à le résoudre.


## Charte graphique
Voici les couleurs à utiliser lors de la création du site :
- EBE3F5		     
- FEFEFF
- D6CFFF
- ABAOF9
- 7C80FC

Voir [ici](https://www.palettedecouleur.net/palette-category/blanc/) pour la source.

## Comment utiliser ce repo
Premièrement, installez `git` [ici](https://git-scm.com/download/win). Pour être sûr que `git` est installé, ouvrez un Powershell et tapez la commande : 
```console
git --version
```
Si tout va bien, vous aurez la version de `git` qui va s'afficher. N'oubliez pas de créer un compte sur [Github](https://github.com) et de m'envoyer votre nom d'utilisateur pour que je vous ajoute au projet.

Ensuite clonez ce repo :
```console
git clone https://github.com/ABFStudio/nsi-bdd.git
```
Cette commande va télécherger le repo `git` sur votre ordinateur.

Avant toute modification, vérifiez bien que vous avez la dernière version du code : 
```console
git fetch
git pull
```
Ces commandes sont à utiliser à chaque fois que du code est envoyé sur le repo.

Pensez bien à changer de branche avant de modifier quoi que ce soit : 
```console
git checkout <votre nom>
```