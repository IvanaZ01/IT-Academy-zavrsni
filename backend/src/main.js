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

//jwt authentication
const authenticateToken = require('./middleware/auth.middleware');

//user actions
const createUser = require('./controllers/user/createUser');
const loginUser = require('./controllers/user/loginUser');
const getAllUsers = require('./controllers/user/getAllUsers');
const updateUser = require('./controllers/user/updateUser');
const deleteUser = require('./controllers/user/deleteUser');


//group actions
const createGroup = require('./controllers/group/createGroup')
const updateGroup = require('./controllers/group/updateGroup');
const getAllGroups = require('./controllers/group/getAllGroups');

//teacher actions
const createTeacher = require('./controllers/teacher/createTeacher');
const getAllTeachers = require('./controllers/teacher/getAllTeachers');
const updateTeacher = require('./controllers/teacher/updateTeacher');
const deleteTeacher = require('./controllers/teacher/deleteTeacher');

//article actions
const getAllArticles = require('./controllers/article/getAllArticles');
const createArticle = require('./controllers/article/createArticle');

//user routes 
app.post('/user-create',authenticateToken, createUser)
app.post('/user-login', loginUser)
app.get('/user-get-all', getAllUsers)
app.post('/user-update/:id', updateUser)
app.delete('/user-delete/:id', deleteUser)

//group routes
app.post('/group-create', createGroup)
app.post('/group-update/:id', updateGroup)
app.get('/group-get-all', getAllGroups)

// teacher actions
app.post('/teacher-create', createTeacher)
app.post('/teacher-update/:id', updateTeacher)
app.get('/teacher-get-all', getAllTeachers)
app.delete('/teacher-delete/:id', deleteTeacher)

//article routes 
app.get('/article-get-all', getAllArticles)
app.post('/article-create', createArticle)


const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
