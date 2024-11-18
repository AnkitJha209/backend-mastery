import express from 'express'

const app = express();


// app.get('/', (req ,res) => {
//     res.send('Server is ready')
// })

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Why don’t skeletons fight each other?",
          content: "Because they don’t have the guts!"
        },
        {
          id: 2,
          title: "What do you call cheese that isn’t yours?",
          content: "Nacho cheese!"
        },
        {
          id: 3,
          title: "Why couldn’t the bicycle stand up by itself?",
          content: "It was two-tired!"
        },
        {
          id: 4,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 5,
          title: "What did the ocean say to the beach?",
          content: "Nothing, it just waved!"
        }
      ];
      res.json(jokes)          
})


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})