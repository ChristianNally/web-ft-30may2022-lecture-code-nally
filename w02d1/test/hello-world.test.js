const assert = require('assert');
const productionFunctions = require('../hello-world');

describe('hello-world group', () => {
  it('returns a sayHello greeting', () => {
    const returnValue = productionFunctions.sayHello('Bobby');
    assert.equal(returnValue, 'Hello, Bobby');
  });
  
  it('returns a sayGoodbye string', () => {
    const returnValue2 = productionFunctions.sayGoodbye('Bobby');
    assert.equal(returnValue2, 'Goodbye, Bobby');
  });
});
