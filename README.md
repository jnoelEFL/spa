# Base pour les nouveaux simulateurs

C'est une application HTML5, construite avec
[Brunch](http://brunch.io) and [Chaplin](http://chaplinjs.org).

## Installation
Installer Git (si ce n'est pas déjà fait) [Git](http://git-scm.com/)
Clone ce repo manuellement with git or use `brunch new gh:paulmillr/brunch-with-chaplin-js`

## Bien démarrer
* Installation (si vous ne les avez pas):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install & bower install`
* Run:
    * `brunch watch --server` — watches le projet avec une compilation continue. Cela lance aussi le serveur HTTP avec [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * 'npm start' est un raccourci de 'brunch watch --server'.
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir est auto-generé et servi par le serveur HTTP. Ecrire le code dans le répertoire `app/`.
    * Place static files que vous voulez etre copiés depuis `app/assets/` vers `public/`.
    * [Brunch site](http://brunch.io), [Chaplin site](http://chaplinjs.org)

---------------

# Pour les débtants

Brunch with Chaplin is a skeleton (boilerplate) for [Brunch](http://brunch.io)
based on [Chaplin](http://chaplinjs.org) architecture. Requires Brunch 1.7+.

This branch does not contain ready-to-use test environment.
If you want take a look how tests can be used, see `with-tests` git branch.

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