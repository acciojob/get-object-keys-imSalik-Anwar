// Define the student object
let student = {
    name: "John"
};

// Add a method to Object.prototype called getKeys
Object.prototype.getKeys = function() {
    // Initialize an empty array to store keys
    let keys = [];
    
    // Iterate through the properties of the object
    for (let key in this) {
        // Check if the property belongs to the object itself (not inherited)
        if (this.hasOwnProperty(key)) {
            // Push the key to the keys array
            keys.push(key);
        }
    }
    
    // Return the array of keys
    return keys;
};

// Test the method
console.log(student.getKeys()); // Output: ["name"]