import Bread from "./bread";
import Cake from "./cake";
import Item from "./items";
import Order from "./order";
import Water from "./water";

test("Oder Test", function () {
  const order = new Order();
  order.addItem(new Bread("French", 10));
  order.addItem(new Cake("chocolate", 5));
  order.addItem(new Water("Crystal 500ml", 2));

  const subtotal = order.getSubtotal();
  expect(subtotal).toBe(17);
});

test("Should calculate order taxes ", function () {
  const order = new Order();
  order.addItem(new Bread("French", 10));
  order.addItem(new Cake("chocolate", 5));
  order.addItem(new Water("Crystal 500ml", 2));

  const taxes = order.getTaxes(new Date("2024-01-05"));
  expect(taxes).toBe(2.5);
});

test("Should calculate order holiday taxes ", function () {
  const order = new Order();
  order.addItem(new Bread("French", 10));
  order.addItem(new Cake("chocolate", 5));
  order.addItem(new Water("Crystal 500ml", 2));

  const taxes = order.getTaxes(new Date("2024-12-05"));
  expect(taxes).toBe(1.5);
});

test("Should calculate order total ", function () {
  const order = new Order();
  order.addItem(new Bread("French", 10));
  order.addItem(new Cake("chocolate", 5));
  order.addItem(new Water("Crystal 500ml", 2));

  const total = order.getTotal(new Date("2024-01-05"));
  expect(total).toBe(19.5);
});
