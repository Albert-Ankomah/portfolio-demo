import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage'
import ResearchPage from './components/Pages/ResearchPage'
import PersonalPage from './components/Pages/PersonalPage'
import CVPage from './components/Pages/CVPage'
import TeachingPage from './components/Pages/TeachingPage'
import ExperiencePage from './components/Pages/ExperiencePage'
import ContactPage from './components/Pages/ContactPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/research' element={<ResearchPage />} />
      <Route path='/teaching' element={<TeachingPage/>} />
      <Route path='/experience' element={<ExperiencePage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/personal' element={<PersonalPage />} />
      <Route path='/cv' element={<CVPage />} />
    </Routes>
  )
}

export default App
