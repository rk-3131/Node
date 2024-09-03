const name = "Radhakrushna Mahadik";

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

// If we want to export them one by one then we can export them using the syntax as
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;
// module.exports.name = name;

// Above method can be used to export the modules and variable from the file but it will be useful only if the number of data points and the number of variables is limited there in the file

// But if there are numerous kind of variables and functions then they  can be exported as they are

module.exports = { add, sub, div, mul, name };
