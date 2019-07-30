let NAMESPACE = {
  VERSERION: '0.0.1',
  title: 'namespace',
  warn () {
    console.warn(`welcome to ${this.title}`)
  },
  People (name, greeter) {
    this.name = name;
    this.greeter = greeter;

    this.say = function () {
      console.log(`${this.name} says ${this.greeter} to you!`);
    }
  },
  Animals: {
    Name: 'cat',
    Food: 'fish',
    Type: 'catamount'
  }
}