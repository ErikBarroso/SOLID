import Item from "./items";
import Order from "./order";

test("Oder Test", function () {
  const order = new Order();
  order.addItem(new Item("bread", "French", 10));
  order.addItem(new Item("Cake", "chocolate", 5));
  order.addItem(new Item("Water", "Crystal 500ml", 2));

  const subtotal = order.getSubtotal();
  expect(subtotal).toBe(17);
});

test("Should calculate order taxes ", function () {
  const order = new Order();
  order.addItem(new Item("Bread", "French", 10));
  order.addItem(new Item("Cake", "chocolate", 5));
  order.addItem(new Item("Water", "Crystal 500ml", 2));

  const taxes = order.getTaxes();
  expect(taxes).toBe(2.5);
});

test("Should calculate order total ", function () {
  const order = new Order();
  order.addItem(new Item("Bread", "French", 10));
  order.addItem(new Item("Cake", "chocolate", 5));
  order.addItem(new Item("Water", "Crystal 500ml", 2));

  const total = order.getTotal();
  expect(total).toBe(19.5);
});
