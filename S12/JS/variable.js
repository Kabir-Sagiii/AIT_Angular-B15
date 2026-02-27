var city = "hyderabad";

function f1() {
  let y = 100;
  var userName = "Kabir"; //global
  if (true) {
    let x = 10;
    x = "Kabir";

    const pin = 123;
    pin = 789;
  }
  console.log(y);
}

function f2() {}

// console.log(city); // hyd
// console.log(username);
//kabir

f1();
// f2();
