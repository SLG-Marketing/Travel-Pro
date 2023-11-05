# Site vitrine TravelPro

## Comment installer

`https://github.com/SLG-Marketing/Travel-Pro.git`

Une fois le projet cloné sur votre ordinateur mettez vous à la racine de ce dernier puis :

`yarn install`

Si vous n'avez pas yarn d'installé vous pouvez l'installé via cette commande :
`npm install --global yarn`



## Comment lancer le projet

Deux commandes :
- `yarn start`: lancer le serveur de développement en local pour travailler/coder dans le projet
- `yarn build`: builder le projet, minifier le css, transpiler le js, ... dans un dossiet `dist`. Le contenu de ce dossier peut être déposé sur un FTP ou n'importe quel autre endroit



## Arborescence GIT

Tout le projet a été codé sur la branche master, cette même branche sur laquelle vous vous trouvez une fois le projet cloné.

Il est recommandé de créer une nouvelle branche qui sera ensuite mergé dans master une fois votre travail terminé.
`git checkout -b "feature/nom-de-la-feature"`

Une fois votre travail terminé faites les commandes suivantes :
- `git add .`
- `git commit -m "message expliquant le travail realisé"`
- `git push`

Lors du premier push git retournera un message d'erreur du type :

`fatal: The current branch test has no upstream branch.
To push the current branch and set the remote as upstream, use`

C'est parce que votre branche locale n'est pas encore connecté au reste du réseau, il faut taper la commande suivante :

`git push --set-upstream origin nom-de-la-branche`

## Arboresence du projet

- `dist`: Dossier à mettre en production. Ce dossier est créé lorsque la commande `yarn build` a été exécutée.

⚠️**ne jamais travailler dans ce dossier !!!**
- `node_modules`: Dossier créé lorsque la commande `yarn install` est executée. Ce dossier contient toutes les dépendances qui permettent au projet de fonctionner correctement. Il est inutile de toucher à ce dossier
- `public`: Dossier des assets (fonts, icons, images, fichiers de traduction)
- `src`: Dossier source qui contient tous les fichiers indispensables au bon fonctionnement du projet (html, web components, css, js)
- `.babelrc` :
Le fichier .babelrc est un fichier de configuration pour Babel, un outil de transpilation de code JavaScript. Il permet de spécifier les règles de transpilation à appliquer au code JavaScript.
- `.gitignore`: Fichier qui permet de bloquer l'envoie de dossiers/fichiers à travers git. Lors d'un `git add .` le fichier `.gitignore` va bloquer l'envoie de certains dossiers/fichiers comme `node_modules` ou encore `dist`.
- `package.json` : Fichier qui contient la configuation globale de notre projet.
- `README.md`: C'est le fichier que vous êtes en train de lire en ce moment même. Le fichier `README.md` permet de documenter le projet sous forme de markdown.
- `webpack.common.js, .dev.js, .prod.js`: Configuration webpack