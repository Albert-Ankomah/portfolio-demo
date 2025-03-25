import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage'
import ResearchPage from './components/Pages/ResearchPage'
import PersonalPage from './components/Pages/PersonalPage'
import CVPage from './components/Pages/CVPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/research' element={<ResearchPage/>} />
      <Route path='/personal' element={<PersonalPage />} />
      <Route path='/cv' element={<CVPage />} />
    </Routes>
  )
}

export default App
