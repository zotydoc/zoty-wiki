
# Instalace
## krok 1 clone projekt
 git clone https://github.com/zotydoc/zoty-wiki.git

## krok 2  instalce
```
$ npm install
```


## krok 3 build
```
$ npm build
```
## krok 4 - preklad
Pro custom překlad do češtiny je potřeba upravit lokál po instalaci balicku  "npm install" soubor cs\theme-common.json
<!--- vlastní lokalizace-->
node_modules\@docusaurus\theme-translations\locales\cs\theme-common.json

  "theme.admonition.caution": "pozor",
  "theme.admonition.danger": "pozor!",
  "theme.admonition.info": "info",
  "theme.admonition.note": "příklad",
  "theme.admonition.tip": "tip",


## krok 3 start local
```
$ npm start
```

## krok 5 - push
-synchronizovat projekt (synchronize changes)
-odeslat do repositare (commit & push)

-Alternativa pres terminal
\zoty-wiki>git fetch
\zoty-wiki>git pull


\zoty-wiki>git commit -am "Uprava readme.md - postupu pro instalace a odesalni zmen do repositare"
\zoty-wiki>git push -uf origin main




# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator for Zoty.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
#   z o t y - w i k i 
 
 