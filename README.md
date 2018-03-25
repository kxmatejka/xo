The static stack
================

Tento stack slouží pro psaní statických stránek v moderním javascriptu s podporou serverového renderování.

# Vývoj

Webpack dev server zajistí vývojový server a hot reloading změn.

```sh
npm run dev
```

# Produkce

V produkčním prostředí je kód sestaven do buildů pro klienta a server. Klientský build je servírován klientovi a serverový build slouží pro sestavení statické html stránky. 

Uživatel bez javascriptu vidí alespoň statický obsah, zatímco uživateli s javasciptem se po načtení klientského buildu zapne interaktivní funkcionalita.

Na server stačí nahrát pouze obsah adresáře build.

```sh
npm run build
```
