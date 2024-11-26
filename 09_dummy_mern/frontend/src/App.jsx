import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  // const [data, setData] = useState([])
  // const getData = async () => {
  //   fetch(`http://localhost:4000/api/v1/getUsers`)
  //   .then(res => res.json())
  //   .then(res => setData(res.data))
  //   .catch(err => console.log("Erorr while fetching the users", err))
  // }

  // useEffect(() => {
  //   getData();
  // },[])

  // console.log(data)

  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  )
}

export default App
