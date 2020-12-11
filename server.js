const express = require('express')
const path = require('path')
const { db } = require('./db')
const {getEntry , newEntry} = require('./controllers/task')
const app = express();
//post wali requirment
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

app.use(express.static(path.join(__dirname , 'public')))
app.post('/allTasks' ,async (req , res) => {
    console.log(req.body.userName);
    console.log(req.body.task)
    const tasks = await newEntry(req.body.userName , req.body.task);
    console.log(tasks)
    res.render('allTask' , {
        userName: req.body.userName , 
        task: req.body.task
    })
})
app.get('/api/tasks/:name' , async (req , res) => {
    
    const tasks = await getEntry(req.params.name);
    res.send(tasks)
})
db.sync().then(() => {
    app.listen(4000 , () => {
        console.log('server statted on port 4000')
    })
}).catch((err) => {
    console.error(err)
})
