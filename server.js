import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors' // automatically handles errors

// DB and auth
import connectDB from './db/connect.js'


// Routers
import authRouter from "./routes/authRouter.js";
import noteRouter from "./routes/noteRouter.js";

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json()); //built in middleware

// home route
app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/note', noteRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;


// run app after db connection is established
const start = async () => {
    try{
        await connectDB(process.env.DB_CONNECTION_STR)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        });
    } catch (err){
        console.log(err)
    }
}

start();