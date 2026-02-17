var x1 = Symbol("a");

var x2 = Symbol("a");

var obj = {
  name: "Kabir",
};

obj[x1] = 1234;
obj["city"] = "hyd";
obj[x2] = 9876;
obj["city"] = "pune";

console.log(obj);
