const products = [

    {
        id: 1,
        name: "Gaming Laptop",
        price: 1200,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },

    {
        id: 2,
        name: "Wireless Headphones",
        price: 200,
        image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
    },

    {
        id: 3,
        name: "Smartphone",
        price: 800,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        id: 4,
        name: "Smart Watch",
        price: 300,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    }

]

const productList = document.getElementById("product-list")

let cart = JSON.parse(localStorage.getItem("cart")) || []

function displayProducts() {

    productList.innerHTML = ""

    products.forEach(product => {

        const div = document.createElement("div")
        div.classList.add("product")

        div.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>$${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`

        productList.appendChild(div)

    })

}

displayProducts()

function addToCart(id) {

    const product = products.find(p => p.id === id)

    cart.push(product)

    localStorage.setItem("cart", JSON.stringify(cart))

    updateCart()

}

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length

}

updateCart()

/* SEARCH */

document.getElementById("search").addEventListener("keyup", function () {

    const value = this.value.toLowerCase()

    const filtered = products.filter(p => p.name.toLowerCase().includes(value))

    productList.innerHTML = ""

    filtered.forEach(product => {

        const div = document.createElement("div")

        div.classList.add("product")

        div.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>$${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`

        productList.appendChild(div)

    })

})

/* DARK MODE */

document.getElementById("themeToggle").onclick = () => {

    document.body.classList.toggle("dark")

}