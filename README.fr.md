# **Documentation de la Partie Client du test d'ingénieur logiciel chez BuiCorporation**

Pour cette documentation en Anglais :<br/>
[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.md)
#
J'ai réalisé trois tâches pour le test technique de Software Engineer de BuiCorporation (backend, frontend et mobile), chacune dans un répertoire git différent. Celui-ci est le repo de la tâche frontend.
</br>
</br>
Pour consulter les autres parties:
* [Backend avec Nest Js](https://github.com/AzizProg/bui-api)
* [Mobile avec Flutter](https://github.com/AzizProg/bui-mobile)

---

# Aperçu
## Page d'accueil
<img width="1283" alt="homepage" src="https://github.com/AzizProg/bui-client/assets/112016586/4c4d1ff6-d897-44c5-9d36-b5f6c6f7f0b1">

## Page de connexion
<img width="1296" alt="login" src="https://github.com/AzizProg/bui-client/assets/112016586/e170b4b3-2751-4198-aba7-53cbbdd8d8f9">

## Page dashboard
<img width="1283" alt="dashboard" src="https://github.com/AzizProg/bui-client/assets/112016586/aa134b6d-13d0-44b5-b7d9-a5b1c3c06131">

## Page des transactions
<img width="1283" alt="transactions" src="https://github.com/AzizProg/bui-client/assets/112016586/e50e889b-f1f0-4729-8691-40c66d8ff37b">

### Page des details de la transaction
<img width="1283" alt="Transaction details" src="https://github.com/AzizProg/bui-client/assets/112016586/29f96b76-c730-4c85-bfe0-c072378840ae">

## Page des clients
<img width="1283" alt="customers" src="https://github.com/AzizProg/bui-client/assets/112016586/32f82c15-3bef-46d0-ab23-c17be784d8f4">

### Page des details du client
<img width="1283" alt="customer details" src="https://github.com/AzizProg/bui-client/assets/112016586/729821a2-8a12-41af-a38f-6a24f9ae897f">

---
# Description

## Ce qui m'a été demandé

- Utiliser Next js pour concevoir l'application
- Dockeriser l'application en créant deux fichiers (Dockerfile et Docker-compose.yml)
- Utiliser la librairie [shadcn/ui](https://ui.shadcn.com/)

## Outils utilisés

- Le langage TypeScript
- le Framework NextJs
- Librairie de composant [shadcn/ui](https://ui.shadcn.com/)
- Tailwindcss pour le style et la personnalisation des composant
- Docker pour isoler mes dépendances et faciliter le déploiement

## Ce que j'ai réalisé

- Une page d'accueille semblable à celle de [buicorporation](https://buicorporation.com/)
- Une page de connexion pour authentifier les collaborateurs qui sont censés surveiller les transactions des clients du wallet
- Une page de Dashboard pour voir les statistiques des transactions et du nombre de client inscrit 
- Une page pour les Transactions pour réunir toutes les transactions au même endroit
- Une page pour les détails de la transaction et le client associé a la transaction
- Une page pour les clients qui rassemble tous les clients
- Une page pour voir les informations d'un client et toutes les transactions du client.
- Le filtrage des transactions par type (dépôt, retrait ou transfert)
- Le filtrage des clients par nom d'utilisateur
- La pagination
- L'utilisation des cookies pour stocker le token
- Un middleware pour protéger l'accès a certains routes aux utilisateurs non authentifié 
---
# Structure du projet
```
src
│
├── app/ le point d'entrée pour accéder aux pages
│   │
│   ├── dashboard/ La section après authentification pour consulter les ressources
│   │   │
│   │   ├── components/ Composants liée à la section dashboard
│   │   │
│   │   ├── customers/ Partie des clients
│   │   │   │
│   │   │   └── [id]/ Partie d'un client unique(voir les détails du clients)
│   │   │  
│   │   └── transactions/ Partie des transactions 
│   │       │
│   │       └── [id]/ Partie d'un client unique(voir les détails de la transaction)
│   │  
│   ├── home/ Page d'accueille
│   │   │
│   │   └── components/ Composants de la page d'accueille
│   │  
│   └── login/ Partie pour l'authentification du collaborateur
│  
├── components/ Composants global (partagé entre différente section)
│   │
│   └── ui/ les composants de la librairie shadcn/ui
│  
├── lib/ les fichiers la récupération des données, gestion de session... (uniquement parce que j'ai pas utilisé de clean architecture)
│
└── styles/ pour le style global a appliquer aux pages

```
---
# Installation
### Étape 1 :
- Récupérer ce repository.
- Installer Docker sur votre ordinateur.
- Ouvrir le projet dans un IDE.

### Étape 2 :
Créer un fichier **.env** à la racine du projet et définir les variables d'environnement ci-dessous.
```
API_BASE_URL=http://bui-api:3001/api/v1
JWT_SECRET_KEY="isASecret"
```
_**NB **: Assurez-vous d'avoir créé le fichier **.env **et défini les variables d'environnement ou simplement d'utiliser celui que j'ai volontairement laissé à la racine du projet contenant les variables déjà définies, sinon le processus de démarrage de l'application ne fonctionnera pas._
---
# Utilisation

## Avec Docker

### Étape 1 : Lancez le projet
Dans le terminal de votre IDE, exécutez la commande ci-dessous pour lancer le projet avec Docker :
```
docker-compose up --build
```
### Étape 2 : Vérifier que le container se trouve dans le réseau défini (facultatif)
Depuis votre terminal , faites:
```
docker network inspect bui-network
```
Ceci devrait afficher les informations du réseau qui a été crée ou rejoint(si le **bui-api** à été lancé en premier) lorsque vous avez lancé l'application comme défini dans le fichier **Docker-compose.yml**.
Dans les informations renvoyés par cette commande , cherchez  la section "containers" et vous devriez retrouvez le container vous venez de crée.

---
# Challenge

## Nextjs

Comprendre le mode de fonctionnement de Nextjs au départ à été un casse tête , j'ai donc pris du temps a lire sa documentation et et consulter des ressources pour m'en sortir. Après réalisation de ce petit  projet , je comprend mieux son utilité et si c'était à refaire j'irai certainement plus vite.

## Docker

N'étant pas habitué à Docker, j'ai dû me mettre à jour et pendant la réalisation du projet, je me suis confronté à un souci de communication entre mes conteneurs (bui-api et bui-client). Étant deux projets différents qui ne se trouvent pas dans le même conteneur, j'ai eu du mal à comprendre au début pourquoi ils ne communiquaient pas normalement et à la fin je me suis rendu compte que j'utilisais toujours le "localhost" qui n'est normalement plus utile dans ce cas puisque mes conteneurs se trouvent chacun dans un environnement virtuel et à chaque construction de mes conteneurs une adresse aléatoire est délivrée par Docker ce qui m'empêche de me baser sur leurs adresses IPv4. J'ai donc creusé pour résoudre le problème et à la fin, j'ai dû créer un réseau Docker auquel les deux conteneurs seraient reliés afin qu'ils puissent communiquer avec leur nom de service.

 
