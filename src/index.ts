
// ==========================================================================
/**
 * Attempts to convert given input to a boolean (primitive).
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
 * All other values return the default value (`null` by default).
 *
 * NOTE: This function behaves differently than the native `Boolean` constructor
 * function which returns `true` or `false` based on the JavaScript truthiness of
 * the given value.
 *
 * ```js
 * toBool(true);     // `true`
 * toBool('Yes');    // `true`
 * toBool('true');   // `true`
 * toBool(false);    // `false`
 * toBool('No');     // `false`
 * toBool('false');  // `false`
 * toBool('other');  // `null`
 * toBool('other', { def: false });  // `false`
 * toBool({});  // `false`
 * toBool({ valueOf: function () { return 'yes'; } });  // `true`
 * ```
 *
 * @param {?*} input - The value to be converted to a boolean.
 * @param {Object} [opts] - The options to use when doing the conversion.
 * @param {*} [opts.def=null] - The default value to return if unable to convert.
 *
 * @returns {(boolean|null|*)} The input converted to a boolean or the default
 *   value if unable to convert.
 */
function toBool(input?: any, opts?: { def?: any }): any {
  let coercedInput: any, defValue: any, output: boolean;

  opts = opts || {};
  defValue = opts.hasOwnProperty('def') ? opts.def : null;
  if (defValue === undefined) {
    defValue = input;
  }

  if (typeof input == 'boolean') {
    output = input;
  }
  else {
    if (input !== undefined && input !== null && typeof input.valueOf == 'function') {
      coercedInput = input.valueOf();
      if (coercedInput && typeof coercedInput.toString == 'function') {
        coercedInput = coercedInput.toString().toLowerCase();
      }
      // The following check ensures only a boolean is returned.
      if (toBool.lut.hasOwnProperty(coercedInput)) {
        output = toBool.lut[coercedInput];
      }
    }
    if (output === undefined) {
      output = defValue;
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


// ==========================================================================
export { toBool, toBool as to_bool };
