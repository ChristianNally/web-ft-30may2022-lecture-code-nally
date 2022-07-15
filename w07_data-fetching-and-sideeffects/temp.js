
let y = 3;

const modify = (x) => {
  let output = x;
  output = output * 2 + y;
  y = output;
  return output;
};

console.log('mod', modify(3));


//
//
//
//
//
//
//
//
//
//
// y = 1;
//
//
//
//
//
//
//
//

console.log('mod', modify(3));
console.log('mod', modify(3));
console.log('mod', modify(3));
