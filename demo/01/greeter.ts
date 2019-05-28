function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Guys!";

document.body.innerHTML = greeter(user);