// const {newEntry} = require('./task')
$('#submit').click(async (e)=>{
    // e.preventDefault();
    const name = $('#name').val()
    const task = $('#task').val()
    console.log(name + ' and ' + task)
    // const tasks = await newEntry(name , task);
    // console.log(tasks)
})