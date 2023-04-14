import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());

app.get("/products", (req, res) => {
    const options = {
     method: "GET",
     url: `https://dummyjson.com/products`,
     headers: {
      "Content-Type": "application/json",
     },
    }
   
    axios
     .request(options)
     .then(response => {
      res.json(response.data)
     })
     .catch(err => {
      console.log(err)
     })
   })
app.listen(process.env.PORT,()=> (console.log(`Server started on port ${process.env.PORT}`)))