function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var users = { firstName: "Jack", lastName: "Ma" };
document.body.innerHTML = greeter1(users);
