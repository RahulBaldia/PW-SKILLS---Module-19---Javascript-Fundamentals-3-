function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}
let student = {
    name: "Rahul Kumar",
    age: 17,
    grade: "A"
};
let propertyToCheck = "height";
let hasProp = hasProperty(student, propertyToCheck);

if (hasProp) {
    console.log(`The object has the property "${propertyToCheck}".`);
} else {
    console.log(`The object does not have the property "${propertyToCheck}".`);
}