# uninstall-package ![test](https://github.com/1000ch/uninstall-package/actions/workflows/test.yml/badge.svg?branch=main)

Uninstall node modules from JavaScript.

## Install

```sh
npm install uninstall-package
```

## Usage

```javascript
import uninstall from 'uninstall-package';

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
