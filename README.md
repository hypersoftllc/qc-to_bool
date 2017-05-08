# qc-to_bool

A simple JavaScript utility to convert various values to a boolean.

[![Build Status](https://travis-ci.org/hypersoftllc/qc-to_bool.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-to_bool)


## Installation

```sh
npm install --save qc-to_bool
```


## Example Usage

```js
import { toBool } from 'qc-to_bool';

toBool(true);     // `true`
toBool('Yes');    // `true`
toBool('true');   // `true`
toBool(false);    // `false`
toBool('No');     // `false`
toBool('false');  // `false`
toBool('other');  // `null`
toBool('other', { def: false });  // `false`
toBool({});  // `false`
toBool({ valueOf: function () { return 'yes'; } });  // `true`
```
