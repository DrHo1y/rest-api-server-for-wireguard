import app from './app.js'
import mongoose from 'mongoose'
import config from 'config'

const port: number = config.get('PORT')
const uri: string = config.get('URI')

async function start(): Promise<void> {
  try {
    await mongoose.connect(uri)
    app.listen(port, () => console.log(`App has been started on port ${port}...`))
  } catch (e: unknown) {
    console.log('Server error..', e)
    process.exit(1)
  }
}

start()