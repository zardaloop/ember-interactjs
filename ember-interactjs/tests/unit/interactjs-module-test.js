import { module, test } from 'qunit';
import interactjs from 'interactjs';

module('interactjs as an ES6 module');

test('it works', function(assert) {
  assert.ok(interactjs);
});