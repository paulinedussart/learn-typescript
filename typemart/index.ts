import products from "./product"

let productName: string = "fanny pack"
let product;
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress = "10 Downing Street, New York City";

[product] = products.filter(p => p.name === productName)

const availableProduct = (product) => {
    if (product.preOrder === 'true') {
        console.log("Hey ! 👋  We’ll send you a message when it’s on the way...")
    }
}

const shippingCost = (product) => {
    if (Number(product.price) > 25) {
        shipping = 0
        console.log(`We provide free shipping for you ${product.name} purchase ... 🎁`)
    } else {
        shipping = 5
    }
}

const extraTax = (address) => {
    if (address.match('New York')) {
        taxPercent = 0.1
    } else {
        taxPercent = 0.05
    }
}

const totalPrice = (purchase) => {
    taxTotal = Number(purchase.price) * taxPercent
    total = Number(purchase.price) + taxTotal + shipping
    console.log(`💵 Total is : $${total}.`)
}

const typeMart = (purchase, adresse) => {
    availableProduct(purchase)
    shippingCost(purchase)
    extraTax(adresse)
    totalPrice(purchase)
}

typeMart(product, shippingAddress)
