const extraChargePercentage = 0.2

const calculateOrderValue = order => {
  const productValue = order.items
    .filter(item => !item.delivery)
    .reduce((totalOrders, actualOrder) => totalOrders + actualOrder.value, 0);

  const delivery = order.items.filter(item => item.delivery);

  if(order.state === 'MT' || order.state ==='MS'){
    const extraCharge = delivery[0].value * extraChargePercentage;
    delivery[0].value += extraCharge;
  }

  return (productValue > 500) ? productValue : productValue + delivery[0].value
}

module.exports = calculateOrderValue;