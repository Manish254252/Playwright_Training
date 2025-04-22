// 1. Basic Types
var userName = "Rahul";
var userAge = 28;
var isLoggedIn = true;
var hobbies = ["reading", "coding"];
var person1 = {
    name: "Suja",
    age: 30,
    greet: function () { return console.log("Hello from Suja!"); }
};
// 3. Class
var Employee = /** @class */ (function () {
    function Employee(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " is working as ").concat(this.role);
    };
    return Employee;
}());
var emp1 = new Employee(101, "Rahul", "QA Engineer");
console.log(emp1.getDetails());
// 4. Enum
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
var taskStatus = Status.InProgress;
console.log("Task Status:", Status[taskStatus]);
// 5. Functions with optional and default parameters
function greetUser(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name);
}
console.log(greetUser("Rahul")); // Uses default
console.log(greetUser("Suja", "Hi")); // Custom greeting
// 6. Generics
function getFirstElement(items) {
    return items[0];
}
console.log(getFirstElement(["apple", "banana", "mango"]));
console.log(getFirstElement([10, 20, 30]));
var user1 = {
    id: 1,
    name: "John"
};
var user2 = {
    admin: true,
    level: "Manager"
};
// 9. Type Assertion
var someValue = "This is a string";
var strLength = someValue.length;
console.log("String Length:", strLength);
