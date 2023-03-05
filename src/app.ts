import express, { Application } from 'express'

import { cors } from './midleware/cors.midleware.js'

const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors)

import peersRouter from './routers/peersRouter.js'
app.use('/api/', peersRouter)

export default app