
import { to_bool, toBool } from './index';

describe('qc-to_bool', () => {

  describe('`toBool`', () => {

    it('should be a function', () => {
      expect(typeof toBool).toBe('function');
    });

    it('called with `arguments` should return default value', function () {
      let input = arguments;
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an empty array should return default value', () => {
      let input: any[] = [];
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an array should return default value', () => {
      let input = ['not empty'];
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `false` should return `false`', () => {
      expect(toBool(false)).toBe(false);
    });

    it('called with `true` should return `true`', () => {
      expect(toBool(true)).toBe(true);
    });

    it('called with a `Date` object should return default value', () => {
      let input = new Date();
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an `Error` object should return default value', () => {
      let input = new Error('Help!');
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with a function should return default value', () => {
      let input = function () {};
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an empty object should return default value', () => {
      let input = {};
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an object should return default value', () => {
      let input = { prop: 'not empty' };
      expect(toBool(input)).toBeNull();
      expect(toBool(input, { def: false })).toBe(false);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `null` should return default value', () => {
      expect(toBool(null)).toBeNull();
      expect(toBool(null, { def: false })).toBe(false);
      expect(toBool(null, { def: undefined })).toBe(null);
    });

    it('called with `Infinity` should return default value', () => {
      expect(toBool(Infinity)).toBeNull();
      expect(toBool(Infinity, { def: false })).toBe(false);
      expect(toBool(Infinity, { def: undefined })).toBe(Infinity);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return default value', () => {
      expect(toBool(Number.NEGATIVE_INFINITY)).toBeNull();
      expect(toBool(Number.NEGATIVE_INFINITY, { def: false })).toBe(false);
      expect(toBool(Number.NEGATIVE_INFINITY, { def: undefined })).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Number.POSITIVE_INFINITY` should return default value', () => {
      expect(toBool(Number.POSITIVE_INFINITY)).toBeNull();
      expect(toBool(Number.POSITIVE_INFINITY, { def: false })).toBe(false);
      expect(toBool(Number.POSITIVE_INFINITY, { def: undefined })).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `NaN` should return default value', () => {
      expect(toBool(NaN)).toBeNull();
      expect(toBool(NaN, { def: false })).toBe(false);
      expect(toBool(NaN, { def: undefined })).toEqual(NaN);
    });

    it('called with `Number.NaN` should return default value', () => {
      expect(toBool(Number.NaN)).toBeNull();
      expect(toBool(Number.NaN, { def: false })).toBe(false);
      expect(toBool(Number.NaN, { def: undefined })).toEqual(NaN);
    });

    it('called with `Number.MIN_VALUE` should return default value', () => {
      expect(toBool(Number.MIN_VALUE)).toBeNull();
      expect(toBool(Number.MIN_VALUE, { def: false })).toBe(false);
      expect(toBool(Number.MIN_VALUE, { def: undefined })).toBe(Number.MIN_VALUE);
    });

    it('called with `-1` should return default value', () => {
      expect(toBool(-1)).toBeNull();
      expect(toBool(-1, { def: false })).toBe(false);
      expect(toBool(-1, { def: undefined })).toBe(-1);
    });

    it('called with `-0` should return `false`', () => {
      expect(toBool(-0)).toBe(false);
    });

    it('called with `0` should return `false`', () => {
      expect(toBool(0)).toBe(false);
    });

    it('called with `1` should return `true`', () => {
      expect(toBool(1)).toBe(true);
    });

    it('called with `2` should return default value', () => {
      expect(toBool(2)).toBeNull();
      expect(toBool(2, { def: false })).toBe(false);
      expect(toBool(2, { def: undefined })).toBe(2);
    });

    it('called with `Number.MAX_VALUE` should return default value', () => {
      expect(toBool(Number.MAX_VALUE)).toBeNull();
      expect(toBool(Number.MAX_VALUE, { def: false })).toBe(false);
      expect(toBool(Number.MAX_VALUE, { def: undefined })).toBe(Number.MAX_VALUE);
    });

    it('called with a regexp should return default value', () => {
      expect(toBool(/regexp/)).toBeNull();
      expect(toBool(/regexp/, { def: false })).toBe(false);
      expect(toBool(/regexp/, { def: undefined })).toEqual(/regexp/);
    });

    it('called with an empty string should return default value', () => {
      expect(toBool('')).toBeNull();
      expect(toBool('', { def: false })).toBe(false);
      expect(toBool('', { def: undefined })).toBe('');
    });

    it('called with `"0"` should return `false`', () => {
      expect(toBool('0')).toBe(false);
    });

    it('called with `"1"` should return `true`', () => {
      expect(toBool('1')).toBe(true);
    });

    it('called with `"f"` should return `false`', () => {
      expect(toBool('f')).toBe(false);
      expect(toBool('F')).toBe(false);
    });

    it('called with `"false"` should return `false`', () => {
      expect(toBool('false')).toBe(false);
      expect(toBool('falsE')).toBe(false);
      expect(toBool('falSe')).toBe(false);
      expect(toBool('falSE')).toBe(false);
      expect(toBool('faLse')).toBe(false);
      expect(toBool('faLsE')).toBe(false);
      expect(toBool('faLSe')).toBe(false);
      expect(toBool('faLSE')).toBe(false);
      expect(toBool('fAlse')).toBe(false);
      expect(toBool('fAlsE')).toBe(false);
      expect(toBool('fAlSe')).toBe(false);
      expect(toBool('fAlSE')).toBe(false);
      expect(toBool('fALse')).toBe(false);
      expect(toBool('fALsE')).toBe(false);
      expect(toBool('fALSe')).toBe(false);
      expect(toBool('fALSE')).toBe(false);
      expect(toBool('False')).toBe(false);
      expect(toBool('FalsE')).toBe(false);
      expect(toBool('FalSe')).toBe(false);
      expect(toBool('FalSE')).toBe(false);
      expect(toBool('FaLse')).toBe(false);
      expect(toBool('FaLsE')).toBe(false);
      expect(toBool('FaLSe')).toBe(false);
      expect(toBool('FaLSE')).toBe(false);
      expect(toBool('FAlse')).toBe(false);
      expect(toBool('FAlsE')).toBe(false);
      expect(toBool('FAlSe')).toBe(false);
      expect(toBool('FAlSE')).toBe(false);
      expect(toBool('FALse')).toBe(false);
      expect(toBool('FALsE')).toBe(false);
      expect(toBool('FALSe')).toBe(false);
      expect(toBool('FALSE')).toBe(false);
    });

    it('called with `"no"` should return `false`', () => {
      expect(toBool('no')).toBe(false);
      expect(toBool('nO')).toBe(false);
      expect(toBool('No')).toBe(false);
      expect(toBool('NO')).toBe(false);
    });

    it('called with `"nope"` should return default value', () => {
      expect(toBool('nope')).toBeNull();
      expect(toBool('nope', { def: false })).toBe(false);
      expect(toBool('nope', { def: undefined })).toBe('nope');
    });

    it('called with `"null"` should return default value', () => {
      expect(toBool('null')).toBeNull();
      expect(toBool('null', { def: false })).toBe(false);
      expect(toBool('null', { def: undefined })).toBe('null');
    });

    it('called with `"off"` should return `false`', () => {
      expect(toBool('off')).toBe(false);
      expect(toBool('ofF')).toBe(false);
      expect(toBool('oFf')).toBe(false);
      expect(toBool('oFF')).toBe(false);
      expect(toBool('Off')).toBe(false);
      expect(toBool('OfF')).toBe(false);
      expect(toBool('OFf')).toBe(false);
      expect(toBool('OFF')).toBe(false);
    });

    it('called with `"on"` should return `true`', () => {
      expect(toBool('on')).toBe(true);
      expect(toBool('oN')).toBe(true);
      expect(toBool('On')).toBe(true);
      expect(toBool('ON')).toBe(true);
    });

    it('called with `"t"` should return `true`', () => {
      expect(toBool('t')).toBe(true);
      expect(toBool('T')).toBe(true);
    });

    it('called with `"true"` should return `true`', () => {
      expect(toBool('true')).toBe(true);
      expect(toBool('truE')).toBe(true);
      expect(toBool('trUe')).toBe(true);
      expect(toBool('trUE')).toBe(true);
      expect(toBool('tRue')).toBe(true);
      expect(toBool('tRuE')).toBe(true);
      expect(toBool('tRUe')).toBe(true);
      expect(toBool('tRUE')).toBe(true);
      expect(toBool('True')).toBe(true);
      expect(toBool('TruE')).toBe(true);
      expect(toBool('TrUe')).toBe(true);
      expect(toBool('TrUE')).toBe(true);
      expect(toBool('TRue')).toBe(true);
      expect(toBool('TRuE')).toBe(true);
      expect(toBool('TRUe')).toBe(true);
      expect(toBool('TRUE')).toBe(true);
    });

    it('called with `"y"` should return `true`', () => {
      expect(toBool('y')).toBe(true);
      expect(toBool('Y')).toBe(true);
    });

    it('called with `"yes"` should return `true`', () => {
      expect(toBool('yes')).toBe(true);
      expect(toBool('yeS')).toBe(true);
      expect(toBool('yEs')).toBe(true);
      expect(toBool('yES')).toBe(true);
      expect(toBool('Yes')).toBe(true);
      expect(toBool('YeS')).toBe(true);
      expect(toBool('YEs')).toBe(true);
      expect(toBool('YES')).toBe(true);
    });

    it('called with `"undefined"` should return default value', () => {
      expect(toBool('undefined')).toBeNull();
      expect(toBool('undefined', { def: false })).toBe(false);
      expect(toBool('undefined', { def: undefined })).toBe('undefined');
    });

    it('called with an input that has a `toString` method that returns a falsy value should return `false`', () => {
      let input: { toString: () => string };

      input = { toString: function () { return '0'; } };
      expect(toBool(input)).toBe(false);

      input = { toString: function () { return 'f'; } };
      expect(toBool(input)).toBe(false);

      input = { toString: function () { return 'false'; } };
      expect(toBool(input)).toBe(false);

      input = { toString: function () { return 'n'; } };
      expect(toBool(input)).toBe(false);

      input = { toString: function () { return 'no'; } };
      expect(toBool(input)).toBe(false);

      input = { toString: function () { return 'off'; } };
      expect(toBool(input)).toBe(false);
    });

    it('called with an input that has a `toString` method that returns a truthy value should return `true`', () => {
      let input: { toString: () => string };

      input = { toString: function () { return '1'; } };
      expect(toBool(input)).toBe(true);

      input = { toString: function () { return 'on'; } };
      expect(toBool(input)).toBe(true);

      input = { toString: function () { return 't'; } };
      expect(toBool(input)).toBe(true);

      input = { toString: function () { return 'true'; } };
      expect(toBool(input)).toBe(true);

      input = { toString: function () { return 'y'; } };
      expect(toBool(input)).toBe(true);

      input = { toString: function () { return 'yes'; } };
      expect(toBool(input)).toBe(true);
    });

    it('called with an input that has a `toString` method that returns neither a falsy value or a truthy value should return default value', () => {
      let input: { toString: () => string };

      input = { toString: function () { return ''; } };
      expect(toBool(input)).toBeNull();

      input = { toString: function () { return 'asdf'; } };
      expect(toBool(input)).toBeNull();
    });

    it('called with an input that has a `valueOf` method that returns a falsy value should return `false`', () => {
      let input: { valueOf: () => any };

      input = { valueOf: function () { return 0; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return false; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return '0'; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return 'f'; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return 'false'; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return 'n'; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return 'no'; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return 'off'; } };
      expect(toBool(input)).toBe(false);

      // The following all pass -- well, at least with the current implementation.  If they ever start failing, then that is
      // okay.  The fact that they return a value that when converted to a string matches a truthy value is a happy
      // coincidence.
      input = { valueOf: function () { return [0]; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return [false]; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['0']; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['f']; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['false']; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['n']; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['no']; } };
      expect(toBool(input)).toBe(false);

      input = { valueOf: function () { return ['off']; } };
      expect(toBool(input)).toBe(false);
    });

    it('called with an input that has a `valueOf` method that returns a truthy value should return `true`', () => {
      let input: { valueOf: () => any };

      input = { valueOf: function () { return 1; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return true; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return '1'; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return 'on'; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return 't'; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return 'true'; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return 'y'; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return 'yes'; } };
      expect(toBool(input)).toBe(true);

      // The following all pass -- well, at least with the current implementation.  If they ever start failing, then that is
      // okay.  The fact that they return a value that when converted to a string matches a truthy value is a happy
      // coincidence.
      input = { valueOf: function () { return [1]; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return [true]; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['1']; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['on']; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['t']; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['true']; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['y']; } };
      expect(toBool(input)).toBe(true);

      input = { valueOf: function () { return ['yes']; } };
      expect(toBool(input)).toBe(true);
    });

    it('called with an input that has a `valueOf` method that returns neither a falsy value or a truthy value should return default value', () => {
      let input: { valueOf: () => any };;

      input = { valueOf: function () { return arguments; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return []; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return ['not empty']; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return new Date(); } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return new Error('Error'); } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return new Error('true'); } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return function () { return true; }; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return {}; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return{ prop: 'not empty', }; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return null; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Infinity; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Number.NEGATIVE_INFINITY; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Number.POSITIVE_INFINITY; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return NaN; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Number.NaN; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Number.MIN_VALUE; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return Number.MAX_VALUE; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return /regexp/; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return ''; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return 'not empty'; } };
      expect(toBool(input)).toBeNull();

      input = { valueOf: function () { return; } };
      expect(toBool(input)).toBeNull();
    });

    it('called with `undefined` should return default value', () => {
      expect(toBool(undefined)).toBeNull();
      expect(toBool(undefined, { def: false })).toBe(false);
      expect(toBool(undefined, { def: undefined })).toBeUndefined();
    });

  });

  describe('`to_bool`', () => {

    it('should be a function', () => {
      expect(typeof to_bool).toBe('function');
    });

    it('should be an alias of `toBool`', () => {
      expect(to_bool).toBe(toBool);
    });

  });

});
