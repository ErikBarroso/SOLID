import TaxItem from "./TaxItem";
import Item from "./items";

export default class Order {
  code: string;
  items: Item[];
  constructor() {
    this.code = `${Math.floor(Math.random() * 100000)}`;
    this.items = [];
  }

  // order n sabe qual item está interagindo (polimorfimos)
  addItem(item: Item) {
    this.items.push(item);
  }

  getSubtotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
  // calculartaxas n é papel da order
  getTaxes(date: Date) {
    let taxes = 0;
    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTaxes(date);
      }
    }
    return taxes;
  }

  getTotal(date: Date) {
    return this.getSubtotal() + this.getTaxes(date);
  }
}
