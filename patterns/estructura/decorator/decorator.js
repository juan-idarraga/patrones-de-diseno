// cuando hay muchas herencias sucesivas mejor se usan los decoradores

//component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }
  getDetail() {
    return `${this.name}`;
  }
}

//decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }
  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }
  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

//objeto component
const productComponent = new ProductComponent("cerveza");
console.log(productComponent.getDetail());

//decorator 1 con component
const commercialInfoPrdouct = new CommercialInfoProductDecorator(
  productComponent,
  "London Peter",
  "Fuller"
);

//decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }
  getDetail() {
    return super.getDetail() + `${this.price}`;
  }
}

//decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());
