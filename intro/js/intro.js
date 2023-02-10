// funcion de primer orden
function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fsum = sum;
res = fsum(5, 6);
console.log(res);

//funcion de orden superior
function operation(fn, a, b) {
  console.log("se ahce algo");
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// arrow function
let fA = () => {
  console.log("arrow");
};

// POO
//clase
class Drink {
  constructor(name) {
    this.name = name;
  }
  info() {
    return "info";
  }
}

//funcional
function Drink2(name) {
  this.name = name;
  this.info = function () {
    return "info 2";
  };
}

const drink = new Drink("agua");
console.log(drink.info());

const drink2 = new Drink2("fuego");
console.log(drink2.info());

// herencia

class Beer extends Drink {
  constructor(name, alcohol) {
    super(name); //exigencia del padre
  }

  info() {
    //sustituir el comportamiento del padre

    return super.info() + " " + this.alcohol; // o usar el del padre
  }
}

const beer = new Beer("erdinger", 8.5);
