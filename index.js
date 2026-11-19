import express from 'express';
import { main, Product } from './database.js';


main()

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.get('/', (req, res) => {
    res.send('Hola')
})

app.post('/producto', async (req, res) => {
    try {
        // Paso 1 - req.body
        const { product } = req.body
        // Paso 2 - validaciones
        // Paso 3 - registro
        const newProduct = new Product(product)
        await newProduct.save()
        // Paso 4 -
        res.status(201).json({
            "mensaje": "New product registered"
        })
    } catch (error) {
        console.log(error)
    }
})


