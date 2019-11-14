interface Person2 {
  firstName: string;
  lastName: string;
}

function greeter(person: Person2) {
  return "hi, " + person.firstName + " " + person.lastName;
}

let o = { firstName: "Jack", lastName: "Ma" };

let sentence = greeter(o);
document.write(sentence);