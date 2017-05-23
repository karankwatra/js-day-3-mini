// The Keyword This

// Oh, JavaScript! Why is 'this' so confusing? Well, it is. So let's practice until you're convinced it makes sense.

/*

1. Create a car with an object literal.

Create an object called car using the object literal notation ({}). Give it a make property, a model property, and a year property. Then give it a method called getAge. This method should take in the current year and return the age of the car as an integer.
*/

// Code here
var car = {
    make: "Toyota",
    model: "Camry",
    year: 1999,
    getAge: function(currYear){
        return currYear - this.year;
    }
}


/*
2. Implicit Binding

Call the getAge method using the car object. Don't forget to pass the year argument. Assign the result to the variable 'carAge' so I can test it.
*/

// Code here
var carAge = car.getAge(2017);



/*

/*
3. Create anotherCar object literal

Create another object called anotherCar with the make, model, and year properties. Do not include the getAge method.

*/

// Code here
var anotherCar = {
    make: "Porsche",
    model: "911 Turbo",
    year: 2017
}



/*
4. Explicit Binding with Bind

Now bind the getAge method of the first car object to the context of anotherCar. Assign this bound function to the variable getAgeForAnotherCar.
*/

// Code here
var getAgeForAnotherCar = car.getAge.bind(anotherCar);



/*
5. Explicit Binding with Call

Now assign a year property to the window object. Give that property the value 2000. Then call the getAge method of car with the window object as the context. Assign the result of that call to the variable windowAge.

*/
year = 2000;

// Code here
var windowAge = car.getAge.call(window, 2017);
// console.log(windowAge);

/*

/*

6. Explicit Binding with Apply

Below you have two objects, both with purchaseTotals, but only one with a method called addToTotal.

Use the apply method to call the addToTotal method of customer1 for customer2 while passing in the numbers 1, 2, and 3.
*/

var customer1 = {
   name: "Brian",
   purchaseTotal: 200,

   addToTotal: function(num1, num2, num3) {
      this.purchaseTotal += num1 + num2 + num3;
   }
};

var customer2 = {
   name: "Shea",
   purchaseTotal: 400
}

// use apply here
customer1.addToTotal.apply(customer2, [1, 2, 3]);


/*
7. More Explicit Binding

Bind the makeSound method of the animal object to the dog object. Assign this bound function to the variable called makeDogSound.
*/



var animal = {
   name: "",
   location: "",
   sound: "",
   makeSound: function() {
      return this.sound
   }
}

var dog = {
   name: "Canis canis",
   location: "everywhere",
   sound: "bark"
}

// Code here
var makeDogSound = animal.makeSound.bind(dog);

// Use call or apply to invoke the makeSound method with different objects.
// console.log(animal.makeSound.call(dog));
// console.log(makeDogSound());


/*

8. More Call and Apply Practice
Below is an object with a findProp method.

*/

var objWithFind = {
   findProp: function(value) {
      for (var prop in this) {
         if (this[prop] === value) {
            return prop
         }
      }
   }
}

/*

Now you can use my method with any object.
Create an object and use my findProp method to find the correct value.
You'll have to call my method and pass the right context, as well as the value you want to search.

*/

var obj = {
    name: "Karan"
}

var target = "Karan";
// console.log(objWithFind.findProp.call(obj, target));



/*
Below is another object with a filter method.
This method filters returns a new object which contains only the properties with values that match the values in the array you pass to the method.

*/

var objWithFilter = {
   filter: function(values) {
      var newObj = {}
      for (var prop in this) {
         for (var value of values) {
            if (this[prop] === value) {
               newObj[prop] = this[prop]
            }
         }
      }
      return newObj;
   }
}

// Now call my filter method on a new object
var obj2 = {
    name: "Karan",
    age: 20
}

console.log(objWithFilter.filter.call(obj2, ["Karan", 19] ));

/*
9. Prototypes

Remember that the prototype methods availabe on the Array, String, etc. objects use the this context to perform operations based on the context.
Here's an example of a useless prototype method.

*/
Array.prototype.findLength = function() {
   return this.length;
}

// Now I can call findLength on any array I create, as in the following:
var arr = [1, 2, 3]
arr.findLength()

// But I can also call the findLength method on the Array.prototype object if I pass a context to it.
Array.prototype.findLength.call([1, 2, 3]);

/*
Let's Use the Array.prototype or String.prototype or Object.prototype methods to practice call and apply.

Call the String.prototype.toUpperCase method and pass it a new string as a context.
*/
var new_str = "hello"
// console.log(String.prototype.toUpperCase.call(new_str));
Array.prototype.filter.call([1, 2, 3], function() {return true})


/*
Call the Array.prototype.filter method and pass it a new array as context and a callback function as an argument.
*/

var new_arr = [5,6,32,8,2]
new_arr = Array.prototype.filter.call(new_arr, function(value){
    return value > 5;
})
// console.log(new_arr);



/*
Apply the String.prototype.replace method and pass it a new string as context and an array which contains a value to search and a value to replace it with.
*/

var new_string = String.prototype.replace.apply("new*string", ["*", " "]);
console.log(new_string)


/*
10. Constructor Functions

We'll cover these again tomorrow, but because the new keyword is in this lesson, let's pratice writing a constructor function again.

Create a constructor function for Person. Take in the name, age, and weight of a person, and assign these values to properties on the object.

*/

function Person(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
}
/*
11. Prototype Creation

Now give your Person object a prototype method called addWeight. Take in the addedWeight and add it to the weight of the person.

*/

Person.prototype.addWeight = function(addedWeight){
    this.weight += addedWeight;
}


/*
12. Create Persons

Create two persons, brian and briansClone, based on your Person object. Call the changeWeight method for each. Console.log the weight of each person to see if the weight has changed.

*/

// Code here
var brian = new Person("Brian", 30, 150);
var briansClone = new Person("Clone", 30, 150);

brian.addWeight(20);
briansClone.addWeight(30);

console.log(brian, briansClone); 
