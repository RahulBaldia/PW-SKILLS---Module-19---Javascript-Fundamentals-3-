function countProperties(obj) {
    return Object.keys(obj).length;
}
let student = {
    name: "Rahul Kumar",
    age: 17,
    grade: "A"
};
let propertyCount = countProperties(student);

console.log(`The object has ${propertyCount} properties.`);