import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(res => setJokes(res.data))
    .catch(error => console.log(error))
  })

  return (
    <div>
      <h1>Ankit and Code...</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h5>{joke.content}</h5>
          </div>
        ))
      }
    </div>
  )
}

export default App
