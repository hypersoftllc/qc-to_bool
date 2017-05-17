# qc-to_bool

[![Build Status][travis-svg]][travis-url]
[![License][license-image]][license-url]

A simple JavaScript utility to convert various values to a boolean.


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
toBool({});  // `null`
toBool({}, { def: false });  // `false`
toBool({ valueOf: function () { return 'yes'; } });  // `true`
```

[license-image]: http://img.shields.io/npm/l/qc-to_bool.svg
[license-url]: LICENSE
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_bool.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_bool
