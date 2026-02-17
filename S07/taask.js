const secretKey = Symbol("secret");
console.log(secretKey);
const user = {
  name: "Alice",
  age: 25,
};

// Add symbol property programmatically
user[secretKey] = "Hidden Data";

console.log(user); // "Hidden Data"
