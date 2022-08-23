// Exercise 01

const greeting = (name) => console.log(`Good Morning, ${name}`);

greeting("John");

// Exercise 02

const greetUsers = (msg, a) => msg.forEach((name) => a(name));
greetUsers(["John", "Peter", "Mark"], greeting);
