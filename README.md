# REACT SCAFFOLDING & TOOLING

## Local Dev
Run the following NPM scripts in separate terminal tabs.
```
$ npm run build
```
```
$ npm run scss
```
```
$ npm start
```

### Basics
```
$ mkdir public src public/css src/scss
```
```
$ touch README.md .gitignore src/app.js public/index.html src/scss/index.scss
```
### Initialize NPM (w/defaults)
```
$ npm init --yes
```

### Tooling
```
$ npm i --save babel-preset-react babel-preset-es2015 watchify babelify live-server
```
```
$ npm i --save-dev node-sass
```
### package.json
```
{
  "scripts":{
    ...
    "build": "watchify src/app.js -o public/bundle.js -t [ babelify --presets [ react es2015 ] ]",
    "start": "cd public; live-server --port=1234 --entry-file=index.html",
    "scss": "node-sass --output-style compressed -w -o public/css src/scss"
  }
}
```

### .gitignore
```
/node_modules
```
