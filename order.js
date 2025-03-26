const orderList = [
  {
    no: 1,
    itemName: "Biryani",
    Category: "Non-veg",
    price: 599,
    paymentStatus: "Pending",
    orderStatus: "On The Way",
  },
  {
    no: 2,
    itemName: "Panir Pakoda",
    Category: "Veg-Food",
    price: 499,
    paymentStatus: "Pending",
    orderStatus: "On The Way",
  },
  {
    no: 3,
    itemName: "Dhokla",
    Category: "Veg-Food",
    price: 359,
    paymentStatus: "Done",
    orderStatus: "On The Way",
  },
  {
    no: 4,
    itemName: "Chikan Popcorn",
    Category: "Non-Veg",
    price: 459,
    paymentStatus: "Done",
    orderStatus: "Delivered",
  },
  {
    no: 5,
    itemName: "Aloo Gobi",
    Category: "Delivered",
    price: 399,
    paymentStatus: "Done",
    orderStatus: "Delivered",
  },
  {
    no: 6,
    itemName: "Fish Cake",
    Category: "Non-veg",
    price: 239,
    paymentStatus: "Done",
    orderStatus: "Delivered",
  },
  {
    no: 7,
    itemName: "Aloo Gobi",
    Category: "Veg-Food",
    price: 399,
    paymentStatus: "Done",
    orderStatus: "Delivered",
  },
];


const itemList = document.getElementById("item-List");


orderList.forEach((i) =>{
    itemList.innerHTML += `
       <tr>
          <th>${i.no}</th>
          <th>${i.itemName}</th>
          <th>${i.Category}</th>
          <th>₹${i.price}</th>
          <th>${i.paymentStatus}</th>
          <th>${i.orderStatus}</th>
        </tr>
    `
})