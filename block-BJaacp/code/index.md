1. What will be the output and explain the reason.

```js
let obj = { name: "Arya" };
obj = { surname: "Stark" };
let newObj = { name: "Arya" };
let user = obj;
let arr = ["Hi"];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`// false
- What is the value of obj? // "Stark" is the value of obj because the value of object always copies by reference.
- `obj == newObj`// because value of newObj is "Arya" and value reassigned to the obj is "Stark",therefore output is false.
- `obj === newObj`// false, because values of obj and newObj are not strictly equal
- `user === newObj`// false, because user has only assigned the value of obj which is "satrk" and user itself has no value to strictly compare.
- `user == newObj`// false
- `user == obj`//true
- `arr == arr2`// true
- `arr === arr2`// true

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

Value of person1 is {name: 'Alex', age: 25} because age and name value of 25 and "Alex" respectively has been updated in the earlier age value of 50 and "John" respectively.
Value of person2 is {name: 'John', age: 50}

```js
function personDetails(person) {
  person.age = 25;
  person = { name: "John", age: 50 };
  return person;
}
var person1 = { name: "Alex", age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ["Bran", "John"];
var user = {
  name: "Sansa",
};
user.brothers = brothers;
brothers.push("Robb");
console.log(user.brothers === brothers); //1. true,
console.log(user.brothers.length === brothers.length); //2. true
```
