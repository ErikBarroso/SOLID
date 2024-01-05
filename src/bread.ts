import TaxItem from "./TaxItem";

export default class Bread extends TaxItem {
  constructor(description: string, price: number) {
    super("Bread", description, price);
  }

  getTax(date: Date): number {
    if (date.getMonth() === 11) return 0.1;
    return 0.2;
  }
}
