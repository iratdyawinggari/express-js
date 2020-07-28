import configure from './config'
import express from 'express'
import createDbConnection from './database/connection'
import AppMiddleware from './middlewares/app-middleware'
import AppRouter from './routes'



configure();

createDbConnection()
.then((connection)=>{
    if(connection.isConnected){
        const app = express();
        app.use(AppMiddleware);
        app.use(AppRouter);
        app.listen(process.env.APP_PORT, ()=>{
            console.log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`)
        })
    }
}).catch((error)=>{
    console.error('Error starting up server')
    console.error(error);
})

