
import { toBool, toBoolOrNull } from './index';

describe('qc-to_bool', () => {

  describe('`toBool`', () => {

    it('should be a function', () => {
      expect(typeof toBool).toBe('function');
    });

    it('called with no arguments should return `undefined`', () => {
      expect(toBool()).toBeUndefined();
    });

    it('called with inconvertible input should return default value', function () {
      let def: any;

      def = [];
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = false;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = true;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = new Date();
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = new Error('Help!');
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = function () {};
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = arguments;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = 123;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = -123;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = Number.MAX_VALUE;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = Number.MIN_VALUE;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = Number.MAX_SAFE_INTEGER;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = Number.MIN_SAFE_INTEGER;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = NaN;
      expect(toBool([], def)).toEqual(NaN);
      expect(toBool([], { def })).toEqual(NaN);
      expect(toBool(['not empty'], def)).toEqual(NaN);
      expect(toBool(['not empty'], { def })).toEqual(NaN);
      expect(toBool(new Date(), def)).toEqual(NaN);
      expect(toBool(new Date(), { def })).toEqual(NaN);
      expect(toBool(new Error('Help!'), def)).toEqual(NaN);
      expect(toBool(new Error('Help!'), { def })).toEqual(NaN);
      expect(toBool(function () {}, def)).toEqual(NaN);
      expect(toBool(function () {}, { def })).toEqual(NaN);
      expect(toBool(arguments, def)).toEqual(NaN);
      expect(toBool(arguments, { def })).toEqual(NaN);
      expect(toBool(Infinity, def)).toEqual(NaN);
      expect(toBool(Infinity, { def })).toEqual(NaN);
      expect(toBool(-Infinity, def)).toEqual(NaN);
      expect(toBool(-Infinity, { def })).toEqual(NaN);
      expect(toBool(NaN, def)).toEqual(NaN);
      expect(toBool(NaN, { def })).toEqual(NaN);
      expect(toBool(Number.NaN, def)).toEqual(NaN);
      expect(toBool(Number.NaN, { def })).toEqual(NaN);
      expect(toBool({}, def)).toEqual(NaN);
      expect(toBool({}, { def })).toEqual(NaN);
      expect(toBool({ prop: 'not empty' }, def)).toEqual(NaN);
      expect(toBool({ prop: 'not empty' }, { def })).toEqual(NaN);
      expect(toBool(/regexp/, def)).toEqual(NaN);
      expect(toBool(/regexp/, { def })).toEqual(NaN);
      expect(toBool('', def)).toEqual(NaN);
      expect(toBool('', { def })).toEqual(NaN);
      expect(toBool('not empty', def)).toEqual(NaN);
      expect(toBool('not empty', { def })).toEqual(NaN);
      expect(toBool(null, def)).toEqual(NaN);
      expect(toBool(null, { def })).toEqual(NaN);
      expect(toBool(undefined, def)).toEqual(NaN);
      expect(toBool(undefined, { def })).toEqual(NaN);

      def = {};
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = /def/;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = '';
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = 'not empty';
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);

      def = null;
      expect(toBool([], def)).toBe(def);
      expect(toBool([], { def })).toBe(def);
      expect(toBool(['not empty'], def)).toBe(def);
      expect(toBool(['not empty'], { def })).toBe(def);
      expect(toBool(new Date(), def)).toBe(def);
      expect(toBool(new Date(), { def })).toBe(def);
      expect(toBool(new Error('Help!'), def)).toBe(def);
      expect(toBool(new Error('Help!'), { def })).toBe(def);
      expect(toBool(function () {}, def)).toBe(def);
      expect(toBool(function () {}, { def })).toBe(def);
      expect(toBool(arguments, def)).toBe(def);
      expect(toBool(arguments, { def })).toBe(def);
      expect(toBool(Infinity, def)).toBe(def);
      expect(toBool(Infinity, { def })).toBe(def);
      expect(toBool(-Infinity, def)).toBe(def);
      expect(toBool(-Infinity, { def })).toBe(def);
      expect(toBool(NaN, def)).toBe(def);
      expect(toBool(NaN, { def })).toBe(def);
      expect(toBool(Number.NaN, def)).toBe(def);
      expect(toBool(Number.NaN, { def })).toBe(def);
      expect(toBool({}, def)).toBe(def);
      expect(toBool({}, { def })).toBe(def);
      expect(toBool({ prop: 'not empty' }, def)).toBe(def);
      expect(toBool({ prop: 'not empty' }, { def })).toBe(def);
      expect(toBool(/regexp/, def)).toBe(def);
      expect(toBool(/regexp/, { def })).toBe(def);
      expect(toBool('', def)).toBe(def);
      expect(toBool('', { def })).toBe(def);
      expect(toBool('not empty', def)).toBe(def);
      expect(toBool('not empty', { def })).toBe(def);
      expect(toBool(null, def)).toBe(def);
      expect(toBool(null, { def })).toBe(def);
      expect(toBool(undefined, def)).toBe(def);
      expect(toBool(undefined, { def })).toBe(def);
    });

    it('called with `arguments` should return input value', function () {
      let input = arguments;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `arguments` and default value should return default value', function () {
      let input = arguments;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an empty array should return input value', () => {
      let input: any[] = [];

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an empty array and default value should return default value', () => {
      let input: any[] = [];

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an array should return default value', () => {
      let input = ['not empty'];

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an array and default value should return default value', () => {
      let input = ['not empty'];

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `false` should return `false`', () => {
      expect(toBool(false)).toBe(false);
    });

    it('called with `true` should return `true`', () => {
      expect(toBool(true)).toBe(true);
    });

    it('called with false `Boolean` object should return `false`', () => {
      let input = new Boolean(false);

      expect(typeof input).toBe('object');
      expect(input.valueOf()).toBe(false);
      expect(toBool(input)).toBe(false);
    });

    it('called with true `Boolean` object should return `true`', () => {
      let input = new Boolean(true);

      expect(typeof input).toBe('object');
      expect(input.valueOf()).toBe(true);
      expect(toBool(input)).toBe(true);
    });

    it('called with the Epoch `Date` object should return `false`', () => {
      let input = new Date(0);

      expect(toBool(input)).toBe(false);
    });

    it('called with a `Date` object should return input value', () => {
      let input = new Date();

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with a `Date` object and default value should return default value', () => {
      let input = new Date();

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an `Error` object should return input value', () => {
      let input = new Error('Help!');

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an `Error` object and default value should return default value', () => {
      let input = new Error('Help!');

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with a function should return input value', () => {
      let input = function () {};

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with a function and default value should return default value', () => {
      let input = function () {};

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an empty object should return input value', () => {
      let input = {};

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an empty object and default value should return default value', () => {
      let input = {};

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an object should return input value', () => {
      let input = { prop: 'not empty' };

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an object and default value should return default value', () => {
      let input = { prop: 'not empty' };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `null` should return input value', () => {
      let input = null;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `null` and default value should return default value', () => {
      let input = null;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Infinity` should return input value', () => {
      let input = Infinity;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `Infinity` and default value should return default value', () => {
      let input = Infinity;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return input value', () => {
      let input = Number.NEGATIVE_INFINITY;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `Number.NEGATIVE_INFINITY` and default value should return default value', () => {
      let input = Number.NEGATIVE_INFINITY;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Number.POSITIVE_INFINITY` should return input value', () => {
      let input = Number.POSITIVE_INFINITY;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `Number.POSITIVE_INFINITY` and default value should return default value', () => {
      let input = Number.POSITIVE_INFINITY;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `NaN` should return input value', () => {
      let input = NaN;

      expect(toBool(input)).toEqual(input);
      expect(toBool(input, undefined)).toEqual(input);
      expect(toBool(input, { def: undefined })).toEqual(input);
    });

    it('called with `NaN` and default value should return default value', () => {
      let input = NaN;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Number.NaN` should return input value', () => {
      let input = Number.NaN;

      expect(toBool(input)).toEqual(input);
      expect(toBool(input, undefined)).toEqual(input);
      expect(toBool(input, { def: undefined })).toEqual(input);
    });

    it('called with `Number.NaN` and default value should return default value', () => {
      let input = Number.NaN;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Number.MIN_VALUE` should return input value', () => {
      let input = Number.MIN_VALUE;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `Number.MIN_VALUE` and default value should return default value', () => {
      let input = Number.MIN_VALUE;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `-1` should return input value', () => {
      let input = -1;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `-1` and default value should return default value', () => {
      let input = -1;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
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

    it('called with `2` should return input value', () => {
      let input = 2;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `2` and default value should return default value', () => {
      let input = 2;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `Number.MAX_VALUE` should return input value', () => {
      let input = Number.MAX_VALUE;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `Number.MAX_VALUE` and default value should return default value', () => {
      let input = Number.MAX_VALUE;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with a regexp should return input value', () => {
      let input = /regexp/;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with a regexp and default value should return default value', () => {
      let input = /regexp/;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with an empty string should return input value', () => {
      let input = '';

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an empty string and default value should return default value', () => {
      let input = '';

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
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

    it('called with `"nope"` should return input value', () => {
      let input = 'nope';

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `"nope"` and default value should return default value', () => {
      let input = 'nope';

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `"null"` should return input value', () => {
      let input = 'null';

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `"null"` and default value should return default value', () => {
      let input = 'null';

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
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

    it('called with `"undefined"` should return input value', () => {
      let input = 'undefined';

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `"undefined"` and default value should return default value', () => {
      let input = 'undefined';

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
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

    it('called with an input that has a `toString` method that returns neither a falsy value or a truthy value should return input value', () => {
      let input: { toString: () => string };

      input = { toString: function () { return ''; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { toString: function () { return 'asdf'; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an input that has a `toString` method that returns neither a falsy value or a truthy value and default value should return default value', () => {
      let input: { toString: () => string };

      input = { toString: function () { return ''; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { toString: function () { return 'asdf'; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
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

    it('called with an input that has a `valueOf` method that returns neither a falsy value or a truthy value should return input value', () => {
      let input: { valueOf: () => any };;

      input = { valueOf: function () { return arguments; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return []; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return ['not empty']; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return new Date(); } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return new Error('Error'); } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return new Error('true'); } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return function () { return true; }; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return {}; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return{ prop: 'not empty', }; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return null; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Infinity; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Number.NEGATIVE_INFINITY; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Number.POSITIVE_INFINITY; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return NaN; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Number.NaN; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Number.MIN_VALUE; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return Number.MAX_VALUE; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return /regexp/; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return ''; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return 'not empty'; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);

      input = { valueOf: function () { return; } };
      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with an input that has a `valueOf` method that returns neither a falsy value or a truthy value and default value should return default value', () => {
      let input: { valueOf: () => any };;

      input = { valueOf: function () { return arguments; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return []; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return ['not empty']; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return new Date(); } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return new Error('Error'); } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return new Error('true'); } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return function () { return true; }; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return {}; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return{ prop: 'not empty', }; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return null; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Infinity; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Number.NEGATIVE_INFINITY; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Number.POSITIVE_INFINITY; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return NaN; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Number.NaN; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Number.MIN_VALUE; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return Number.MAX_VALUE; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return /regexp/; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return ''; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return 'not empty'; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);

      input = { valueOf: function () { return; } };

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    it('called with `undefined` should return input value', () => {
      let input = undefined;

      expect(toBool(input)).toBe(input);
      expect(toBool(input, undefined)).toBe(input);
      expect(toBool(input, { def: undefined })).toBe(input);
    });

    it('called with `undefined` and default value should return default value', () => {
      let input = undefined;

      expect(toBool(input, null)).toBeNull();
      expect(toBool(input, { def: null })).toBeNull();

      expect(toBool(input, false)).toBe(false);
      expect(toBool(input, { def: false })).toBe(false);

      expect(toBool(input, true)).toBe(true);
      expect(toBool(input, { def: true })).toBe(true);
    });

    describe('`resetConverter`', () => {

      it('should be a function', () => {
        expect(typeof toBool.resetConverter).toBe('function');
      });

      it('when called should reset the converter back to the original converter', () => {
        expect(toBool('')).toBe('');
        toBool.setConverter((x) => !!x);
        expect(toBool('')).toBe(false);
        toBool.resetConverter();
        expect(toBool('')).toBe('');
      });

    });

    describe('`setConverter`', () => {

      it('should be a function', () => {
        expect(typeof toBool.setConverter).toBe('function');
      });

      it('when called should update the converter used to do the calculation', () => {
        let converter;

        expect(toBool('')).toBe('');
        try {
          converter = (x) => !!x;
          toBool.setConverter(converter);
          expect(toBool('')).toBe(false);
        } finally {
          toBool.resetConverter();
          expect(toBool('')).toBe('');
        }

        expect(toBool('H')).toBe('H');
        expect(toBool('Hai')).toBe('Hai');
        expect(toBool('I')).toBe('I');
        expect(toBool('Iie')).toBe('Iie');
        try {
          converter = (input) => {
            let coercedInput: any, output: any;

            if (input !== undefined && input !== null && typeof input.valueOf == 'function') {
              coercedInput = input.valueOf();
              if (coercedInput && typeof coercedInput.toString == 'function') {
                coercedInput = coercedInput.toString().toLowerCase();
              }
              output = converter.lut[coercedInput];
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
          expect(toBool('H')).toBe(true);
          expect(toBool('Hai')).toBe(true);
          expect(toBool('I')).toBe(false);
          expect(toBool('Iie')).toBe(false);
        } finally {
          toBool.resetConverter();
          expect(toBool('')).toBe('');
        }
      });

    });

  });

  describe('`toBoolOrNull`', () => {

    it('should be a function', () => {
      expect(typeof toBoolOrNull).toBe('function');
    });

    it('called with no arguments should return `null`', () => {
      expect(toBoolOrNull()).toBeNull();
    });

    it('called with inconvertible input should return `null`', function () {
      expect(toBoolOrNull(arguments)).toBeNull();
      expect(toBoolOrNull([])).toBeNull();
      expect(toBoolOrNull(['not empty'])).toBeNull();
      expect(toBoolOrNull(new Date())).toBeNull();
      expect(toBoolOrNull(new Error('Help!'))).toBeNull();
      expect(toBoolOrNull(function () {})).toBeNull();
      expect(toBoolOrNull({})).toBeNull();
      expect(toBoolOrNull({ prop: 'not empty' })).toBeNull();
      expect(toBoolOrNull(null)).toBeNull();
      expect(toBoolOrNull(Infinity)).toBeNull();
      expect(toBoolOrNull(Number.NEGATIVE_INFINITY)).toBeNull();
      expect(toBoolOrNull(Number.POSITIVE_INFINITY)).toBeNull();
      expect(toBoolOrNull(NaN)).toBeNull();
      expect(toBoolOrNull(Number.NaN)).toBeNull();
      expect(toBoolOrNull(Number.MIN_VALUE)).toBeNull();
      expect(toBoolOrNull(-1)).toBeNull();
      expect(toBoolOrNull(2)).toBeNull();
      expect(toBoolOrNull(Number.MAX_VALUE)).toBeNull();
      expect(toBoolOrNull(/regexp/)).toBeNull();
      expect(toBoolOrNull('')).toBeNull();
      expect(toBoolOrNull('nope')).toBeNull();
      expect(toBoolOrNull('null')).toBeNull();
      expect(toBoolOrNull('undefined')).toBeNull();
      expect(toBoolOrNull(undefined)).toBeNull();
    });

  });

});
