# uninstall-package [![Build Status](https://travis-ci.org/1000ch/uninstall-package.svg?branch=master)](https://travis-ci.org/1000ch/uninstall-package)

Uninstall node modules from JavaScript.

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

### `uninstall(packages, [args], [options])`

#### packages

Type: `String`, `Array<String>`

#### args

Type: `String`, `Array<String>`, `Object`

#### options

Type: [`Object`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
