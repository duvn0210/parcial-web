import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import ProdusctList from './pages/ProdusctList'
import { Register } from './pages/Register'
import FirstProduct from './pages/firstProduct'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/productos" element={<ProdusctList />} />
      <Route exact path="/primer-producto" element={<FirstProduct />} />
    </Routes>
  )
}

export default App
