const {Tasks} = require('../db')
async function newEntry(name , task) {
    const task1 = await Tasks.create({
        name ,
        task
    })
    return task1;
}
async function getEntry(name) {
    const tasks = await Tasks.findAll(
        {
            where: {name}
        }
    )
    return tasks;
}
module.exports = {
    newEntry,
    getEntry
}
