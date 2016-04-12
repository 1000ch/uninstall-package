'use strict';

const test = require('blue-tape');
const install = require('install-package');
const uninstall = require('../');

test('uninstall a package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co'))
    .then(() => uninstall('co'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('uninstall multiple packages', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(() => uninstall(['co', 'co-fs']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('uninstall not exist package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(() => uninstall('not-exist-package'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept string options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(() => uninstall('co', '--save'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept array options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(() => uninstall('co', ['--save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept object options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(() => uninstall('co', { '--save' : true }))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});
