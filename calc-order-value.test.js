const calculateOrderValue = require('./calc-order-value');

it("Doesn't charge delivery costs when the products total value its higher than 500", () => {
  //ARRANGE
  const myOrder = {
    items: [
      { name: 'Silver Sword', value: 2000 },
      { name: 'Health Potion', value: 100 },
      { name: 'Delivery', value: 40, delivery: true }
    ]
  };

  //ACT
  const result = calculateOrderValue(myOrder);

  //ASSERT
  expect(result).toBe(2100);
});

it("Must charge  delivery costs when the products total value its equal or lower than 500", () => {
  const myOrder = {
    items: [
      { name: 'Wooden Shield', value: 200 },
      { name: 'Delivery', value: 40, delivery: true }
    ]
  };

  const result = calculateOrderValue(myOrder);
  expect(result).toBe(240)
})

it("Must charge extra 20% on delivery expenses if the order its from MT state", () => {
  const myOrderOnMT = {
    state: 'MT',
    items: [
      { name: 'Giant Axe', value: 200 },
      { name: 'Delivery', value: 100, delivery: true }
    ]
  };
  const result = calculateOrderValue(myOrderOnMT);

  expect(result).toBe(320);
})

it("Must charge extra 20% on delivery expenses if the order its from MS state", () => {
  const myOrderOnMS = {
    state: 'MS',
    items: [
      { name: 'Giant Axe', value: 200 },
      { name: 'Delivery', value: 100, delivery: true }
    ]
  };
  const result = calculateOrderValue(myOrderOnMS);

  expect(result).toBe(320);
})

it("Don't charge any extra delivery expenses if the order its from SP state", () => {
  const myOrderOnSP = {
    state: 'SP',
    items: [
      { name: 'Giant Axe', value: 200 },
      { name: 'Delivery', value: 100, delivery: true }
    ]
  };
  const result = calculateOrderValue(myOrderOnSP);

  expect(result).toBe(300);
})