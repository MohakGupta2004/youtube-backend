import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const app = express()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
dotenv.config()
app.use(morgan('dev'))
app.use(cookieParser())

//routes
import userRouter from './routes/user.routes'
import videoRouter from './routes/video.routes'
app.use("/api/v1/user", userRouter)
app.use('/api/v1/video', videoRouter)
export default app;