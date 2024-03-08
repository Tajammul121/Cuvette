import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Register  from './Pages/Register'
import  Movie  from './Pages/Movie'
import Display  from './Pages/Display'
import Browser from './Pages/Browser'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/browser' element={<Browser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
