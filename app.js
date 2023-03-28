import express from 'express'
import router from './router/index.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/api', router)

app.listen(3006, () => {
  console.log('express serve running at http://localhost:3006')
})
