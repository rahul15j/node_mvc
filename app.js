const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/route');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());
app.options('*', cors())

app.use(router);






mongoose.connect(process.env.CONNECTION_STRING, {
    
   
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})


app.listen(port, async () => {
    console.log(`server up on port ${port}`);
  });
