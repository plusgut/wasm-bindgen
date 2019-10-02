const assert = require('assert');
const wasm = require('wasm-bindgen-test');

var called = false;

exports.hit = function() {
  called = true;
};

exports.FOO = 1.0;

exports.test_works = function() {
  assert.strictEqual(called, true);

  var r = wasm.Foo.new();
  assert.strictEqual(r.add(0), 0);
  assert.strictEqual(r.add(1), 1);
  assert.strictEqual(r.add(2), 3);
  r[wasm.__wbg_free]();

  var r2 = new wasm.Foo(10);
  assert.strictEqual(r2.add(0), 10);
  assert.strictEqual(r2.add(1), 11);
  assert.strictEqual(r2.add(2), 13);
  r2[wasm.__wbg_free]();

  assert.strictEqual(wasm.Color.Green, 0);
  assert.strictEqual(wasm.Color.Yellow, 1);
  assert.strictEqual(wasm.Color.Red, 2);
  assert.strictEqual(Object.keys(wasm.Color).length, 3);
  assert.strictEqual(wasm.cycle(wasm.Color.Green), wasm.Color.Yellow);

  wasm.node_math(1.0, 2.0);
};
