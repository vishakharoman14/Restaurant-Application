import express from "express";  
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from './database/dbConnection.js';
import {errorMiddlewear} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({path: "./config/config.env"})
app.use(cors({
    origing: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))



app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use('/api/v1/reservation',reservationRouter)



dbConnection();
app.use(errorMiddlewear);

export default app;