export default class Item {
  category: string;
  description: string;
  price: number;
  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

  calculateTaxes() {
    let taxes = 0;
    if (this.category === "Bread") {
      taxes += this.price * 0.2;
    }
    if (this.category === "Cake") {
      taxes += this.price * 0.1;
    }
    return taxes;
  }
}
