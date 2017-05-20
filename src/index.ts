
// ==========================================================================
/**
 * Attempts to convert a boolean-like input to a JavaScript boolean (primitive).
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
 *
 * All other values return the default value (undefined by default).
 *
 * NOTE: This function behaves differently than the native `Boolean` constructor
 * function which returns `true` or `false` based on the JavaScript truthiness of
 * the given value.
 *
 * ```js
 * toBool(new Boolean(true));                            // `true`
 * toBool(new Boolean(false));                           // `false`
 * toBool(true);                                         // `true`
 * toBool('Yes');                                        // `true`
 * toBool('true');                                       // `true`
 * toBool(false);                                        // `false`
 * toBool('No');                                         // `false`
 * toBool('false');                                      // `false`
 * toBool('other');                                      // `'other'` (input)
 * toBool('other', false);                               // `false`
 * toBool('other', { def: false });                      // `false`
 * toBool({});                                           // `{}` (input)
 * toBool({}, false);                                    // `false`
 * toBool({}, true);                                     // `true`
 * toBool({}, null);                                     // `null`
 * toBool({}, { def: false });                           // `false`
 * toBool({ valueOf: function () { return 'yes'; } });   // `true`
 * ```
 *
 * @param {?*} input - The value to be converted to a boolean.
 * @param {Object} [opts] - The options to use when doing the conversion.
 * @param {*} [opts.def=undefined] - The default value to return if unable to
 *   convert.  This is allowed to be of any data type.  A value of `undefined`
 *   means return the input when not convertable.
 *
 * @returns {(boolean|*)} The input converted to a boolean or the default
 *   value if unable to convert.  Note: a value of type boolean is not always
 *   returned when the default value is returned.
 */
function toBool(input?: any, opts?: { def?: any }): any {
  let coercedInput: any, def: any, output: any;

  if (typeof input == 'boolean') {
    output = input;
  }
  else {
    if (input !== undefined && input !== null && typeof input.valueOf == 'function') {
      coercedInput = input.valueOf();
      if (coercedInput && typeof coercedInput.toString == 'function') {
        coercedInput = coercedInput.toString().toLowerCase();
      }
      output = toBool.lut[coercedInput];
    }

    if (output === undefined) {
      // Resolve default value:
      if (typeof opts == 'object' && opts !== null) {
        def = opts.def;
      }
      else {
        def = opts;
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

  export interface Lut {
    [key: string]: boolean
  }

  export let lut: Lut = {
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

}


function toBoolOrNull(input?: any) {
  return toBool(input, null);
}

// ==========================================================================
export { toBool, toBoolOrNull };
