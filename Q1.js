let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};

function displayCarProperties(car) {
    for (let property in car) {
        console.log(`${property}: ${car[property]}`);
    }
}

displayCarProperties(car);

