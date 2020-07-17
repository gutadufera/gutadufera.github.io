// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"


String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
).join(" ");
}


// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}


// 3.Create an object called Teacher derived from the Person class, and implement a method called teach
// which receives a string called subject, and returns:
// [teacher's name] is now teaching [subject]


function Person(name) {
    this.name = name;
};
const teacher = new Person("Ati Haile");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}








