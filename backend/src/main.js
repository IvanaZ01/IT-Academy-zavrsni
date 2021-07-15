const dotenvLoadingResult = require('dotenv').config();

if (dotenvLoadingResult.error) {
	throw dotenvLoadingResult.error;
}
console.log(dotenvLoadingResult.parsed);


const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello')
})

const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})