import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main></main>
      </BrowserRouter>
    </>
  )
}

export default App
