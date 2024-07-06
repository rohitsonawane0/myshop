import express, { Application } from 'express'
import dotenv from 'dotenv'
import appRoutes from './routes/app.route'
dotenv.config()

class Server {
  private app: Application
  constructor(app: Application) {
    this.app = app
  }

  public start(): void {
    this.setupMiddleware()
    this.setupRoutes()
    this.setupGlobalErrorHandler()

    this.startServer()
  }

  public setupMiddleware(): void {
    this.app.use(express.json())
    this.app.use(express.json())
    this.app.use(express.json())
    this.app.use(express.json())
  }
  public setupRoutes(): void {
    appRoutes(this.app)
  }
  public setupGlobalErrorHandler(): void {
    this.app.all('*', (req, res, next) => {
      res.status(404).json({ message: 'Route not found' })
    })
  }

  private startServer() {
    const port = parseInt(process.env.PORT!) || 5000
    this.app.listen(port, () => {
      console.log(`server listing on port: ${port}`)
    })
  }
}

export default Server
