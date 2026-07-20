import test from 'node:test';
import assert from 'node:assert';
import { sumar } from './index.js';

test('Debería sumar dos números correctamente', () => {
  assert.strictEqual(sumar(2, 3), 5);
  assert.strictEqual(sumar(-1, 1), 0);
});