import express from 'express'
import logger from 'morgan'
import cors from 'cors'
const app = express()

// import db from './utils/database.js'
import db from './utils/database.js'
import blogRouter from './routes/blogRouter.js'
import apiBlogRouter from './routes/api/apiBlogRouter.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/blog_xx', blogRouter)

app.use('/api/menu_61', apiBlogRouter)

app.use('/', (req, res, next) => {
  res.send('周浩偉 212410061')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
