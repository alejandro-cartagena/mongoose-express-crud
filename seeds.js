const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("MONGO CONNECTION OPEN"))
    .catch((err) => console.log(`MONGO CONNECTION ERROR: \n${err}`))


const seedProducts = [
    {name: 'Apple', price: 1.00, category: 'fruit'},
    {name: 'Banana', price: 1.25, category: 'fruit'},
    {name: 'Bell Pepper', price: 1.50, category: 'vegetable'},
    {name: 'Celery', price: 1.50, category: 'vegetable'},
    {name: 'Watermelon', price: 1.00, category: 'fruit'},
    {name: 'Whole Milk', price: 3.99, category: 'dairy'}
]

Product.insertMany(seedProducts)
    .then(data => console.log(data))
    .catch((err) => console.log(`ERROR: \n${err}`))