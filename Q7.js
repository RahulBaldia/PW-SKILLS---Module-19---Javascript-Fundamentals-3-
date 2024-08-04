   
let userMap = new Map();


function addUser(id, name, age, email) {
    userMap.set(id, { name: name, age: age, email: email });
    console.log(`User with ID ${id} added.`);
}


function updateUser(id, newName, newAge, newEmail) {
    if (userMap.has(id)) {
        userMap.set(id, { name: newName, age: newAge, email: newEmail });
        console.log(`User with ID ${id} updated.`);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}


function deleteUser(id) {
    if (userMap.has(id)) {
        userMap.delete(id);
        console.log(`User with ID ${id} deleted.`);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}


function displayUsers() {
    if (userMap.size > 0) {
        userMap.forEach((value, key) => {
            console.log(`ID: ${key}, Name: ${value.name}, Age: ${value.age}, Email: ${value.email}`);
        });
    } else {
        console.log("No users found.");
    }
}


addUser(1, "Rahul Kumar", 17, "rahul@example.com");
addUser(2, "John Doe", 22, "john.doe@example.com");
displayUsers();

updateUser(1, "Rahul Kumar Baldia", 18, "rahul.kumar@example.com");
deleteUser(2);
displayUsers();
