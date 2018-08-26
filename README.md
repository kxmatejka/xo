The static stack
================

Tento stack slouží pro psaní statických stránek v moderním javascriptu s podporou serverového renderování.

# Inicializace

```sh
git clone git@gitlab.com:kx.matejka/the-static-stack.git {new-project-name}
cd {new-project-name}
git remote set-url origin {new-project-git-origin}
npm install
```

# Vývoj

Webpack dev server zajistí vývojový server a hot reloading změn.

```sh
npm run watch
```

Ve webpacku je nastaven resolve na adresář src/app. Zde je [odkaz](https://blog.jetbrains.com/webstorm/2017/06/webstorm-2017-2-eap-172-2827/) na nastavení webstormu.

# Produkce

V produkčním prostředí je kód sestaven do buildů pro klienta a server. Klientský build je servírován klientovi a serverový build slouží pro sestavení statické html stránky. 

Uživatel bez javascriptu vidí alespoň statický obsah, zatímco uživateli s javasciptem se po načtení klientského buildu zapne interaktivní funkcionalita.

Na server stačí nahrát pouze obsah adresáře build.

```sh
npm run build
```
