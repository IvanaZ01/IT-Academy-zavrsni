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
const deleteGroup = require('./controllers/group/deleteGroup');

//teacher actions
const createTeacher = require('./controllers/teacher/createTeacher');
const getAllTeachers = require('./controllers/teacher/getAllTeachers');
const updateTeacher = require('./controllers/teacher/updateTeacher');
const deleteTeacher = require('./controllers/teacher/deleteTeacher');

//article actions
const getAllArticles = require('./controllers/article/getAllArticles');
const createArticle = require('./controllers/article/createArticle');
const deleteArticle = require('./controllers/article/deleteArticle');
const updateArticle = require('./controllers/article/articleUpdate');

//test actions
const createTest = require('./controllers/test/createTest');
const getGroupTests = require('./controllers/test/getGroupTests');
const deleteTest = require('./controllers/test/deleteTest');
const updateTest = require('./controllers/test/updateTest');

//user routes 
app.post('/user-create',authenticateToken, createUser)
app.post('/user-login', loginUser)
app.get('/user-get-all',authenticateToken, getAllUsers)
app.put('/user-update/:id',authenticateToken, updateUser)
app.delete('/user-delete/:id',authenticateToken, deleteUser)

//group routes
app.post('/group-create',authenticateToken, createGroup)
app.put('/group-update/:id',authenticateToken, updateGroup)
app.get('/group-get-all',authenticateToken, getAllGroups)
app.delete('/group-delete/:id',authenticateToken, deleteGroup)

// teacher actions
app.post('/teacher-create',authenticateToken, createTeacher)
app.put('/teacher-update/:id',authenticateToken, updateTeacher)
app.get('/teacher-get-all',authenticateToken, getAllTeachers)
app.delete('/teacher-delete/:id',authenticateToken, deleteTeacher)

//article routes 
app.get('/article-get-all', getAllArticles)
app.post('/article-create',authenticateToken, createArticle)
app.delete('/article-delete/:id',authenticateToken, deleteArticle)
app.put('/article-update/:id',authenticateToken, updateArticle)

//test routes
app.post('/test-create',authenticateToken, createTest)
app.get('/test-get-all/:id',authenticateToken, getGroupTests)
app.delete('/test-delete/:id',authenticateToken, deleteTest)
app.put('/test-update/:id',authenticateToken, updateTest)


const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
