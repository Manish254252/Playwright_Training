// 1. Basic Types
let userName: string = "Rahul";
let userAge: number = 28;
let isLoggedIn: boolean = true;
let hobbies: string[] = ["reading", "coding"];

// 2. Interface
interface Person {
    name: string;
    age: number;
    greet: () => void;
}

const person1: Person = {
    name: "Suja",
    age: 30,
    greet: () => console.log("Hello from Suja!")
};

// 3. Class
class Employee {
    private id: number;
    protected name: string;
    public role: string;

    constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    getDetails(): string {
        return `${this.name} is working as ${this.role}`;
    }
}

const emp1 = new Employee(101, "Rahul", "QA Engineer");
console.log(emp1.getDetails());

// 4. Enum
enum Status {
    Pending,
    InProgress,
    Completed
}

let taskStatus: Status = Status.InProgress;
console.log("Task Status:", Status[taskStatus]);

// 5. Functions with optional and default parameters
function greetUser(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}

console.log(greetUser("Rahul")); // Uses default
console.log(greetUser("Suja", "Hi")); // Custom greeting

// 6. Generics
function getFirstElement<T>(items: T[]): T {
    return items[0];
}

console.log(getFirstElement<string>(["apple", "banana", "mango"]));
console.log(getFirstElement<number>([10, 20, 30]));

// 7. Type Alias
type User = {
    id: number;
    name: string;
    email?: string; // optional
};

const user1: User = {
    id: 1,
    name: "John"
};

// 8. Union & Intersection Types
type Admin = {
    admin: true;
    level: string;
};

type RegularUser = {
    admin: false;
    department: string;
};

type AnyUser = Admin | RegularUser;
type SuperUser = User & Admin;

const user2: AnyUser = {
    admin: true,
    level: "Manager"
};

// 9. Type Assertion
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

console.log("String Length:", strLength);
