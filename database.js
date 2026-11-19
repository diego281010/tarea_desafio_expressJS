import mongoose from 'mongoose'

async function main() {
    try {
        const { connection } = await mongoose.connect('mongodb://127.0.0.1:27017/tarea')
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error)
    }

}

const { Schema } = mongoose;

const productSchema = new Schema({
    foto: String,
    titulo: String,
    descripcion: String,
    precio: Number,
    cantidad: Number,
    Cantidad: Number
})

const Product = mongoose.model('Product', productSchema)

export { main, Product }
