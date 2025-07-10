// import './App.css'
import { Home } from './Pages/Home/Home'
import { Profile } from './Pages/Profile/Profile'
import{ Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
