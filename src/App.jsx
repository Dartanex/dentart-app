import { Route, Routes } from 'react-router-dom'
import { StartPage } from './pages/StartPage'
import { HomePage } from './pages/HomePage'
import { CavitiesPage } from './pages/CavitiesPage'
import { QuizPage } from './pages/QuizPage'

import { IcdasCavities } from './pages/IcdasCavities'


function App() {

  /*const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/cavities', element: <CavitiesPage /> },
    { path: '/dentalcare', element: <DentalCarePage />},
    { path: '/home', element: <QuizPage /> }
  ])*/
  return (
    <>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/cavities" element={<CavitiesPage />} />
        <Route exact path='/icdascavities' element={<IcdasCavities />} />
        <Route exact path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
