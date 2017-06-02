# qc-to_bool

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A simple JavaScript utility to convert various values to a boolean.


## Installation

```sh
npm install --save qc-to_bool
```


## Example Usage

```js
import { toBool, toBoolOrNull } from 'qc-to_bool';

toBool(new Boolean(true));                  // `true`
toBool(new Boolean(false));                 // `false`
toBool(true);                               // `true`
toBool(false);                              // `false`
toBool(1);                                  // `true`
toBool(0);                                  // `false`
toBool('1');                                // `true`
toBool('0');                                // `false`
toBool('t');                                // `true`
toBool('f');                                // `false`
toBool('Y');                                // `true`
toBool('N');                                // `false`
toBool('on');                               // `true`
toBool('off');                              // `false`
toBool('true');                             // `true`
toBool('false');                            // `false`
toBool('Yes');                              // `true`
toBool('No');                               // `false`
toBool('other');                            // `'other'` (input)
toBool('other', false);                     // `false`
toBool('other', { def: false });            // `false`
toBool({});                                 // `{}` (input)
toBool({}, false);                          // `false`
toBool({}, true);                           // `true`
toBool({}, null);                           // `null`
toBool({}, { def: false });                 // `false`
toBool({ valueOf () { return 'yes'; } });   // `true`
toBoolOrNull(false);                        // `false`
toBoolOrNull('1');                          // `true`
toBoolOrNull('other');                      // `null`
toBoolOrNull({});                           // `null`

// Use different converter:
toBool('');                                 // `''` (input)
// Based on JavaScript truthiness:
toBool.setConverter(x => !!x);
toBool('');                                 // `false`
toBool({});                                 // `true`

// Based on Japanese language:
let converter = (input) => {
  let coercedInput, output;

  if (input !== undefined && input !== null) {
    if (typeof input.valueOf == 'function') {
      coercedInput = input.valueOf();
      if (coercedInput && typeof coercedInput.toString == 'function') {
        coercedInput = coercedInput.toString().toLowerCase();
      }
      output = converter.lut[coercedInput];
    }
  }
  return output;
};
converter.lut = {
  h: true,
  hai: true,
  i: false,
  iie: false,
};
toBool.setConverter(converter);
toBool('hai');                              // `true`
toBool('iie');                              // `false`

// Set back to default converter:
toBool.resetConverter();
```

[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-to_bool/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-to_bool?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-to_bool.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-to_bool
[license-image]: http://img.shields.io/npm/l/qc-to_bool.svg
[license-url]: LICENSE
[npm-badge-png]: https://nodei.co/npm/qc-to_bool.png?downloads=true&stars=true
[package-url]: https://npmjs.org/package/qc-to_bool
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_bool.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_bool
