var x1 = Symbol("id");
var x2 = Symbol("id");

console.log(typeof x1);

var obj = {
  name: "s1",
  gender: "male",
};

obj[x1] = 123;
obj[x2] = 897;
obj["name"] = "s2";

console.log(obj);
