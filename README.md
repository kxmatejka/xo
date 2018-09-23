# The static stack

Minimalistický stack pro psaní moderního reactu s podporou serverového renderování.

Další příklady konfigurace můžete najít na [este](https://github.com/este/este).
Production ready stack [next.js](https://github.com/zeit/next.js)

## Setup

* webpack
* babel
* react
  * styled components
  * flow
* server side rendering

## Inicializace

```sh
git clone git@github.com:kxmatejka/the-static-stack.git {new-project-name}
cd {new-project-name}
git remote set-url origin {new-project-git-origin}
npm install
```

## Vývoj

Webpack dev server zajistí vývojový server a hot reloading změn.

```sh
npm run watch
```

Ve webpacku je nastaven resolve na adresář src/app. Díky tomu je možné používat absolutní import.

```js
import HelloComponent from 'app/components/HelloComponent'
```

Nastavení resolve pro [webstorm](https://blog.jetbrains.com/webstorm/2017/06/webstorm-2017-2-eap-172-2827/)

## Produkce

V produkčním prostředí je kód sestaven do buildů pro klient a server. Klientský build je servírován klientovi a serverový build slouží pro sestavení statické html stránky. 

Uživatel bez javascriptu vidí alespoň statický obsah, zatímco uživateli s javasciptem se po načtení klientského buildu zapne interaktivní funkcionalita.

Na server stačí nahrát pouze obsah adresáře build.

```sh
npm run build
```
