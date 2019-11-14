"use strict";
function greeter(person) {
    return "hi, " + person.firstName + " " + person.lastName;
}
var o = { firstName: "Jack", lastName: "Ma" };
var sentence = greeter(o);
document.write(sentence);
//# sourceMappingURL=person.js.map