"use strict";
// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let vehicles = ["convertible car", "Raft", "Speed Boat", "Ferrari F8 Tributo"];
vehicles.map((items) => console.log(`“I would like to own a ${items}”`));
// 2ND WAY
// Define an array of favorite modes of transportation
const favoriteTransportation = ["Tesla Model S", "Honda CB650R motorcycle", "Vespa scooter", "Toyota Prius", "Boeing 747"];
// Function to print statements about the transportation items
function printTransportationStatements(transportation) {
    transportation.forEach(item => {
        console.log(`I would like to own a ${item}.`);
    });
}
// Call the function with the array of transportation items
printTransportationStatements(favoriteTransportation);
