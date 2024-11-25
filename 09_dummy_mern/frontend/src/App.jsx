import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const getData = async () => {
    fetch(`http://localhost:4000/api/v1/getUsers`)
    .then(res => res.json())
    .then(res => setData(res.data))
    .catch(err => console.log("Erorr while fetching the users", err))
  }

  useEffect(() => {
    getData();
  },[])

  console.log(data)

  return (
    <div>
      Hello there
    </div>
  )
}

export default App
