import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT
import productsRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

connectDB()

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('API running')
})

app.use('/api/products', productsRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server runs on ${port}`))
