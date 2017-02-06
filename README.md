# REACT SCAFFOLDING & TOOLING

## Local Dev
```
$ npm run build
```
```
$ npm run server
```

### Basics
```
$ mkdir public src
```
```
$ touch README.md
```
```
$ touch .gitignore
```
```
$ touch src/app.js
```
```
$ touch public/index.html
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
    "build": "watchify src/app.js -o public/bundle.js -t [babelify --presets [react es2015]]",
    "server": "cd public; live-server --port=1234 --entry-file=index.html"
  }
}
```

### .gitignore
```
/node_modules
```
