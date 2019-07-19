function People (name) {
  this.name = name;
  this.greeter = function () {
    // alert(`this is a greeter from ${this.name}.`);
    console.warn(`this is a greeter from ${this.name}.`);
  }
}