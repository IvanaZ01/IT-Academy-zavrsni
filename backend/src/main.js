const dotenvLoadingResult = require('dotenv').config();

if (dotenvLoadingResult.error) {
	throw dotenvLoadingResult.error;
}
console.log(dotenvLoadingResult.parsed);


const express = require('express')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors());

//user actions
const createUser = require('./controllers/user/createUser');

//group actions
const createGroup = require('./controllers/group/createGroup')

//teacher actions
const createTeacher = require('./controllers/teacher/createTeacher')

//user routes 
app.post('/create-user', createUser)

//group routes
app.post('/create-group', createGroup)

// teacher actions
app.post('/create-teacher', createTeacher)


const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
