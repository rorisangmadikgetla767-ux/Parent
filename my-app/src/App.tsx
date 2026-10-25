import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  './App.css'
import Login from "./Login"
import Dashboard from './dashboard'
import Students  from './Students'
import Register from './Register'
import logo from './assets/parent-logo.jpeg'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App