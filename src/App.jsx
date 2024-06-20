import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Meet from "./pages/Meet"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='meet/:id' element={<Meet />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
