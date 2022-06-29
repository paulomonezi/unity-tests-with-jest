const calculateOrderValue = order => {
  const productValue = order.items
    .filter(item => !item.delivery)
    .reduce((totalOrders, actualOrder) => totalOrders + actualOrder.value, 0);

  const delivery = order.items.filter(item => item.delivery);

  if (productValue > 500) {
    return productValue;
  }
  else {
    return productValue + delivery[0].value;
  }
}


module.exports = calculateOrderValue;