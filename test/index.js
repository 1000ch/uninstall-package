'use strict';
const test = require('ava');
const install = require('install-package');
const uninstall = require('..');

test('uninstall a package', async t => {
  await install('noop2', ['--no-save']);
  const {stdout} = await uninstall('noop2', ['--no-save']);

  t.not(stdout, null);
});

test('uninstall multiple packages', async t => {
  await install(['noop2', 'noop3'], ['--no-save']);
  const {stdout} = await uninstall(['noop2', 'noop3'], ['--no-save']);

  t.not(stdout, null);
});

test('uninstall not exist package', async t => {
  await install(['noop2', 'noop3'], ['--no-save']);
  const {stdout} = await uninstall('not-exist-package', ['--no-save']);

  t.not(stdout, null);
});

test('accept string options', async t => {
  await install(['noop2', 'noop3'], ['--no-save']);
  const {stdout} = await uninstall('noop2', '--no-save');

  t.not(stdout, null);
});

test('accept array options', async t => {
  await install(['noop2', 'noop3'], ['--no-save']);
  const {stdout} = await uninstall('noop2', ['--no-save']);

  t.not(stdout, null);
});

test('accept object options', async t => {
  await install(['noop2', 'noop3'], ['--no-save']);
  const {stdout} = await uninstall('noop2', {'--no-save': true});

  t.not(stdout, null);
});
