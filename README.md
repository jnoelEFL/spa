# Base pour les nouveaux simulateurs

C'est une application HTML5, construite avec
[Brunch](http://brunch.io) and [Chaplin](http://chaplinjs.org).

## Installation
Installer [Git](http://git-scm.com/) (si ce n'est pas déjà fait).

Clone ce repo manuellement avec git `git clone git://github.com/jnoelEFL/spa.git`

## Bien démarrer
* Installation (si vous ne les avez pas):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install & bower install`
* Run:
    * `brunch watch --server` — watches le projet avec une compilation continue. Cela lance aussi le serveur HTTP avec [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm start` est un raccourci de `brunch watch --server`.
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir est auto-generé et servi par le serveur HTTP. Ecrire le code dans le répertoire `app/`.
    * Place les fichiers static dans `app/assets/`. Ils seront copiés automatiquement dans `public/`.
    * [Brunch site](http://brunch.io), [Chaplin site](http://chaplinjs.org)

---------------

# Pour les débutants

Cette base est un squelette (boilerplate) pour [Brunch](http://brunch.io)
basé sur une architecture [Chaplin](http://chaplinjs.org). Requires Brunch 1.7+.

Pour l'instant la partie test n'est pas encore implémentée.

## Librairies incluses:

Javascript :
* Backbone - 1.1.2 (Framework MVC)
* ChaplinJS - 1.0 (Surcouche pour Backbone)
* Underscore - 1.6.0 (Libraire JS utilisé par Backbone) 
* JQuery - 1.11.1 (Libraire JS utilisé par Backbone) 
* Moment - 2.6.0 (Librairie utilisé pour la gestion des dates)

CSS :
* Boostrap - 3.1.1 (Fichiers .less) pour la CSS générale
* Stylus - pour les CSS spécifiques

HTML:
* Handlebars - pour les templates HTML des différentes vues

## Documentation

* [Backbone](http://backbonejs.org/)
* [Chaplin](http://chaplinjs.org)
* [Underscore](http://underscorejs.org/)
* [Handlebars](http://handlebarsjs.com/)
* [Moment](http://momentjs.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Stylus](https://learnboost.github.io/stylus/)