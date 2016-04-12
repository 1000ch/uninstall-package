# uninstall-package

Uninstall node modules from JavaScript.

[![Build Status](https://travis-ci.org/1000ch/install-unpackage.svg?branch=master)](https://travis-ci.org/1000ch/install-unpackage)

## Install

```sh
npm install uninstall-package
```

## Usage

```javascript
const uninstall = require('uninstall-package');

uninstall('co', '--save').then(result => {
  console.log(result.stdout);
  console.log(result.stderr);
});
```

## API

### `uninstall(packages, [options])`

#### packages

Type: `String`, `Array<String>`

#### options

Type: `String`, `Array<String>`, `Object`

## License

MIT: http://1000ch.mit-license.org
