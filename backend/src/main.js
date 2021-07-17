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
const loginUser = require('./controllers/user/loginUser');


//group actions
const createGroup = require('./controllers/group/createGroup')

//teacher actions
const createTeacher = require('./controllers/teacher/createTeacher');

//user routes 
app.post('/user-create', createUser)
app.post('/user-login', loginUser)

//group routes
app.post('/group-create', createGroup)

// teacher actions
app.post('/teacher-create', createTeacher)


const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
