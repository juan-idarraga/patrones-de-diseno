console.log("hola");

class DrinkTS {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  info(): string {
    return this.name;
  }
}

const drinkts = new DrinkTS("agua");
console.log(drinkts.info());

//interface
interface Product {
  price: number;
  getPrice(): string;
}

//herencia
class BeerTS extends DrinkTS implements Product {
  private alcohol: number;
  price: number;
  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }
  getPrice(): string {
    return "$ " + this.price;
  }
  info(): string {
    return super.info() + " " + this.alcohol;
  }
}

const childBeer = new BeerTS("poker", 2.5, 10);
console.log(childBeer.info());
