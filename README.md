# REACT SCAFFOLDING & TOOLING

### Basics
```
$ touch README.md
```
```
$ touch .gitignore
```
```
$ mkdir public src
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

### index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
```
