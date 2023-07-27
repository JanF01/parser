const Classification = require('./StreetNumericClassification')

module.exports.tests = {}

module.exports.tests.constructor = (test) => {
  test('constructor', (t) => {
    let c = new Classification()
    t.false(c.public)
    t.equals(c.label, 'street_numeric')
    t.equals(c.confidence, 1.0)
    t.deepEqual(c.meta, {})
    t.end()
  })
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`StreetNumericClassification: ${name}`, testFunction)
  }

  for (var testCase in module.exports.tests) {
    module.exports.tests[testCase](test, common)
  }
}
