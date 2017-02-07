# REACT SCAFFOLDING & TOOLING

## Local Dev
```
$ npm run build
```
```
$ npm start
```

### Basics
```
$ mkdir public src
```
```
$ touch README.md .gitignore src/app.js public/index.html
```
### Initialize NPM (w/defaults)
```
$ npm init --yes
```

### Tooling
```
$ npm i --save babel-preset-react babel-preset-es2015 watchify babelify live-server
```

### package.json
```
{
  "scripts":{
    ...
    "build": "watchify src/app.js -o public/bundle.js -t [ babelify --presets [ react es2015 ] ]",
    "start": "cd public; live-server --port=1234 --entry-file=index.html"
  }
}
```

### .gitignore
```
/node_modules
```
