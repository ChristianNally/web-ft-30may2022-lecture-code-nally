// implement a function called sayHello that takes the name of the saluted and returns what would be said.

const capitalize = () => {
  // do something
};

const sayHello = (name) => {
  let output = '';
  capitalize();
  output = `Hello, ${name}`;
  console.log('output',output);
  return output;
};

const sayGoodbye = (name) => {
  let output = '';
  output = `Goodbye, ${name}`;
  capitalize();
  console.log('output',output);
  return output;
};

// make the functions exportable
module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};
