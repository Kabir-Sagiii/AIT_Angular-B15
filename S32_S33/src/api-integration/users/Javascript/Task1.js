function register() {
  return {
    x: 10,
    y: 20,
  };
}

var obj1 = {
  ...register(),
};

var obj1 = {
  ...{ x: 10, y: 20 },
};

var obj1 = {
  x: 10,
  y: 20,
};

console.log(obj1);

// const { x, y } = register();
// console.log(x, y);
