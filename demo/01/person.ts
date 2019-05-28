interface Person {
  firstName: string;
  lastName: string;
}

function greeter1(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let users = { firstName: "Jack", lastName: "Ma" };

document.body.innerHTML = greeter1(users);