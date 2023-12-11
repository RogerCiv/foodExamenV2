import { saveLocalStorage } from "./saveLocalStorage";

export function handlePay(){
    const orderItems = Array.from(document.querySelectorAll(".order .card"))

    const products = orderItems.map(order => {
        console.log(order.dataset.price);
        return{
            idProduct: order.dataset.id,
            titleProduct: order.dataset.food,
            priceProduct: parseFloat(order.dataset.price),
        }
    })

    const total = products.reduce((total,item) => total + item.priceProduct,0)

    const orderData = { products, total }
    console.log(orderData);
    saveLocalStorage(orderData)
}