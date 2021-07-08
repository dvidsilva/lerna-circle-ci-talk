import assert from 'assert';
import bundle from '../dest/main.js';

describe('add()', function () {
  it('should add two numbers', function () {
    assert.strictEqual(bundle.add(1, 2), 3);
  });
});

describe('substract()', function () {
  it('should substract two numbers', function () {
    assert.strictEqual(bundle.substract(4, 1), 3);
  });
});
