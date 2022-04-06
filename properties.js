const bottle = {color: 'Yellow', hold: 'water', price: 50, isCleaned: true};
// getting all properties names
keys = Object.keys(bottle);
console.log(keys);

// getting all values
const values = Object.values(bottle);
console.log(values);

// get both key and values (key-value pair)
const pairs = Object.entries(bottle);
console.log(pairs);

// Object.seal(bottle);       // using this seal keyword you can change a value but can't delete or add a value
Object.freeze(bottle);        // using this freeze keyword you can't change or delete or add a value
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;     // delete a property from object
console.log(bottle);