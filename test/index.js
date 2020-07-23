'use strict';

const test = require('blue-tape');
const install = require('install-package');
const uninstall = require('../');

test('uninstall a package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co', ['--no-save']))
    .then(() => uninstall('co', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('uninstall multiple packages', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(() => uninstall(['co', 'co-fs'], ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('uninstall not exist package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(() => uninstall('not-exist-package', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept string options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(() => uninstall('co', '--no-save', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept array options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(() => uninstall('co', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept object options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(() => uninstall('co', { '--no-save' : true }))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});
