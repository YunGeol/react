const people = [{ age: 21, name: 'mike'}, { age: 51, name: 'sara'}];
for (const { age, name } of people) {
    console.log("-----");
    console.log("age: %s", age);
    console.log("name: %s", name);
}

console.log("==========");
const obj = { name: 'mike', mother: { name: 'sara' } };
const {
    name,
    mother: { name: motherName }
} = obj;
console.log("name:%s", name);
console.log("motherName:%s", motherName);

