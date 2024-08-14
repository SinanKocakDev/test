import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 4001

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT} port!`);
    
})