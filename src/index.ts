
interface Lut {
  [key: string]: boolean
}

let lut: Lut = {
  0: false,
  1: true,
  f: false,
  t: true,
  n: false,
  y: true,
  on: true,
  off: false,
  no: false,
  yes: true,
  false: false,
  true: true,
};

function converter(input?: any): any {
  let coercedInput: any, output: any;

  if (input !== undefined && input !== null && typeof input.valueOf == 'function') {
    coercedInput = input.valueOf();
    if (coercedInput && typeof coercedInput.toString == 'function') {
      coercedInput = coercedInput.toString().toLowerCase();
    }
    output = lut[coercedInput];
  }
  return output;
}

let _ = {
  converter: converter
};

// ==========================================================================
/**
 * Attempts to convert a boolean-like input to a JavaScript boolean primitive.
 *
 * If the boolean-like input cannot be converted to a boolean, then the default
 * value is returned.  When the default value is undefined, then the input is
 * returned.
 *
 * The following values return `false`:
 *
 * - `0`
 * - `false`
 * - `'0'`
 * - `'f'`
 * - `'F'`
 * - `'false'` and any case variation like `'False'`.
 * - `'n'`
 * - `'N'`
 * - `'no'` and any case variation like `'No'`.
 * - `'off'` and any case variation like `'Off'`.
 * - `new Boolean(<js-falsey>)`
 *
 * The following values return `true`:
 *
 * - `1`
 * - `true`
 * - `'1'`
 * - `'on'` and any case variation like `'On'`.
 * - `'t'`
 * - `'T'`
 * - `'true'` and any case variation like `'True'`.
 * - `'y'`
 * - `'Y'`
 * - `'yes'` and any case variation like `'Yes'`.
 * - `new Boolean(<js-truthy>)`
 *
 * All other values return the default value.
 *
 * NOTE: This function behaves differently than the native `Boolean` constructor
 * function which returns `true` or `false` based on the JavaScript truthiness of
 * the given value.
 *
 * ```js
 * toBool(new Boolean(true));                            // `true`
 * toBool(new Boolean(false));                           // `false`
 * toBool(true);                                         // `true`
 * toBool(false);                                        // `false`
 * toBool(1);                                            // `true`
 * toBool(0);                                            // `false`
 * toBool('1');                                          // `true`
 * toBool('0');                                          // `false`
 * toBool('t');                                          // `true`
 * toBool('f');                                          // `false`
 * toBool('Y');                                          // `true`
 * toBool('N');                                          // `false`
 * toBool('true');                                       // `true`
 * toBool('false');                                      // `false`
 * toBool('Yes');                                        // `true`
 * toBool('No');                                         // `false`
 * toBool('other');                                      // `'other'` (input)
 * toBool('other', false);                               // `false`
 * toBool('other', { def: false });                      // `false`
 * toBool({});                                           // `{}` (input)
 * toBool({}, false);                                    // `false`
 * toBool({}, true);                                     // `true`
 * toBool({}, null);                                     // `null`
 * toBool({}, { def: false });                           // `false`
 * toBool({ valueOf() { return true; } });               // `true`
 * toBool({ valueOf() { return 'yes'; } });              // `true`
 * toBool({ toString() { return 'yes'; } });             // `true`
 * toBoolOrNull(false);                                  // `false`
 * toBoolOrNull('1');                                    // `true`
 * toBoolOrNull('other');                                // `null`
 * toBoolOrNull({});                                     // `null`
 * ```
 *
 * @param {*=} input - The value to be converted to a JavaScript boolean
 *   primitive.  This may also be an object with a custom `valueOf` method that
 *   returns a number or parsible string.
 * @param {*=|{ def: *}=} [def=undefined] - The default value to return if
 *   unable to convert.  This is allowed to be of any data type.  This may also
 *   be an object with a `def` property.  To return an object as a default value,
 *   then wrap it in an object with a `def` property set to the object that is to
 *   be used as the default value.  A default value resolving to `undefined`
 *   means return the input when not convertible.
 *
 * @returns {boolean|*} The input converted to a boolean or the default
 *   value if unable to convert.  Note: a value of type boolean is not always
 *   returned when the default value is returned.
 */
function toBool(input?: any, def?: any | { def: any }): any {
  let coercedInput: any, output: any;

  if (typeof input == 'boolean') {
    output = input;
  }
  else {
    output = _.converter(input);

    if (typeof output != 'boolean') {
      // Resolve default value:
      if (typeof def == 'object' && def !== null && def.hasOwnProperty('def')) {
        def = def.def;
      }
      else {
        def = def;
      }
      if (def === undefined) {
        def = input;
      }

      output = def;
    }
  }

  return output;
}

namespace toBool {

  export interface Converter {
    (input?: any): any
  }

  export let resetConverter: () => void = function () {
    _.converter = converter;
  };

  export let setConverter: (converter: Converter) => void = function (converter: Converter) {
    _.converter = converter;
  };

}


/**
 * Like `toBool` but returns `null` if input is not convertible to a boolean.
 */
function toBoolOrNull(input?: any) {
  return toBool(input, null);
}

// ==========================================================================
export { toBool, toBoolOrNull };
