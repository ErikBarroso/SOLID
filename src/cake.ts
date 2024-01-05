import TaxItem from "./TaxItem";
import Item from "./items";

export default class Cake extends TaxItem {
  constructor(description: string, price: number) {
    super("Cake", description, price);
  }

  getTax(date: Date): number {
    return 0.1;
  }
}
