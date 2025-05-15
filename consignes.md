# TP Final - Docker

## Objectif

L'objectif de ce TP est de réaliser une dockerisation d'une app existante.
Pensez aux bonnes pratiques de dockerisation, comme la taille, la logique et l'optimisation de l'image.

## Setup

```bash
mkdir tp-final-docker
cd tp-final-docker
```

Vous clonerez deux repos git dans ce dossier :

```bash
git clone git@github.com:ThomasLaforge/client-livres.git front
git clone git@github.com:ThomasLaforge/tp-final-docker-back.git back
```

## Rendu (20 points)

Un fichier NOM_PRENOM_TP.md contenant les réponses aux questions et les commandes utilisées.
ex: LAFORGE_Thomas_TP.md

## Partie 1 - Dockerisation du front (5 points)

Créer un Dockerfile pour le front, dans le dossier front.
Il devra se lancer sur le port 5001.

Pour vérifier que votre code fonctionne, aller sur votre navigateur favori et taper l'url suivante : http://localhost:5001

Copier le contenu du Dockerfile dans le fichier NOM_PRENOM_TP.md
Copier la commande pour build votre image docker.
Copier la commande pour lancer votre image.

## Partie 2 - Dockerisation du back (6 points)

Créer un Dockerfile pour le back, dans le dossier back.
Il devra se lancer sur le port 1992 sans modifier le code.

Pour vérifier que votre code fonctionne, aller sur votre navigateur favori et taper l'url suivante : http://localhost:1992/books
Une liste de livre devrait être retournée.

Copier le contenu du Dockerfile dans le fichier NOM_PRENOM_TP.md
Copier la commande pour build votre image docker.
Copier la commande pour lancer votre image.

## Partie 3 - Docker-compose (5 points)

dans le dossier tp-final-docker, créer un fichier docker-compose.yml

Il devra contenir les deux services front et back avec la configuration nécessaire pour que les deux services se lancent et communiquent entre eux.
Utilisez au maximum, les Dockerfile que vous avez créé précédemment.
Donnez la commande pour construire la composition.
Donnez la commande pour lancer l'image composée.

## Partie 4 - Mise en production (4 points)

Commenter ou fournissez des commandes pour mettre en production votre application.