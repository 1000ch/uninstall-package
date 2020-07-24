'use strict';
const test = require('ava');
const install = require('install-package');
const uninstall = require('..');

test.beforeEach(async () => {
  await install(['noop2', 'noop3'], '--no-save');
});

test('uninstall a package', async t => {
  try {
    const {stdout} = await uninstall('noop2', '--no-save');

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('uninstall multiple packages', async t => {
  try {
    const {stdout} = await uninstall(['noop2', 'noop3'], '--no-save');

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('uninstall not exist package', async t => {
  try {
    const {stdout} = await uninstall('not-exist-package', '--no-save');

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('throw exception when package is blank', async t => {
  try {
    await uninstall(null);
  } catch (error) {
    t.not(error, null);
  }
});

test('accept string options', async t => {
  try {
    const {stdout} = await uninstall('noop2', '--no-save');

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('accept array options', async t => {
  try {
    const {stdout} = await uninstall('noop2', ['--no-save']);

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('accept object options', async t => {
  try {
    const {stdout} = await uninstall('noop2', {'--no-save': true});

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});
