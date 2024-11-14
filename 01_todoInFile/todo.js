const fs = require('fs')
const filePath = './01_todoInFile/task.json'

const loadTask = () => {
    try{
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(error){
        return []
    }
}

const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks))
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task})
    saveTasks(tasks)
}

const listTask = () => {
    const tasks = loadTask()
    tasks.forEach(task => console.log(task))
}

const removeTask = (id) => {
    let tasks = loadTask();
    tasks = tasks.filter((task, index) => index !== id)
    console.log(tasks)
    saveTasks(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]


if(command === 'add'){
    addTask(argument)
}
else if(command === 'list'){
    listTask()
}
else if(command=== 'remove'){
    removeTask(parseInt(argument))
}
else{
    console.log('command not found')
}