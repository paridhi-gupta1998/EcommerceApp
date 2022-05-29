const products = [
    { 
        id : 12345,
        name: "Pari",
        description: "Skirt",
        onSale : false,
        price: 2000,
        quantity: 2000,
        categoryId: 1,
    },
    { 
        id : 123456,
        name: "Pari1",
        description: "Top",
        onSale : true,
        price: 2000,
        quantity: 2000,
        categoryId: 1,
    },
    { 
        id : 123457,
        name: "Pari2",
        description: "Shoes",
        onSale : false,
        price: 2000,
        quantity: 2000,
        categoryId: 2,
    }
]
const categories = [
    {
        id: 1,
        name: "Clothes"
    },
    {
        id: 2,
        name: "Footwear"
    }

]

module.exports = {products, categories}