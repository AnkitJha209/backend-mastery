import express from 'express'

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello From Ankit!!!!')
// })

// app.get('/new-user', (req, res) => {
//     res.send("Hello New User")
// })

// app.get('/profile', (req, res) => {
//     res.send("Ankit Jha")
// })


// ============== crud application ================
app.use(express.json())

let data = []
let nextId = 1


// putting all the data
app.post('/profiles', (req, res) => {
    const {name, price} = req.body
    const newData = {id: nextId++, name, price}
    data.push(newData)
    res.status(201).send(newData)
})


// showing all the data
app.get('/profiles', (req, res) => {
    res.status(200).send(data)
})

// showing single user data
app.get('/profiles/:id', (req, res) => {
    const id = req.params.id
    let userData = data.find(d => d.id === parseInt(id))
    if(!userData){
        return res.status(404).send("Data not Found")
    }
    res.status(202).send(userData)
})

// updation of data
app.put('/profiles/:id', (req, res) => {
    const id = req.params.id
    let userData = data.find(t => t.id === parseInt(id))

    if(!userData){
        return res.status(404).send("Data not found")
    } 
    const { name , price} = req.body
    userData.name = name
    userData.price = price
    res.status(204).send(userData)
})

// delete a user
app.delete('/profiles/:id', (req, res) => {
    const id = req.params.id
    const index = data.findIndex(d => d.id === parseInt(id))
    if(index === -1){
        return res.status(404).send("Index not found")
    }
    data.splice(index, 1)
    res.status(205).send('deleted') 
})


app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}....`)
})