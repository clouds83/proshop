import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT
import productsRoutes from './routes/productRoutes.js'

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API running')
})

app.use('/api/products', productsRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server runs on ${port}`))
