import Item from "./items";

export default class Water extends Item {
  constructor(description: string, price: number) {
    super("Water", description, price);
  }
}
