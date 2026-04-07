import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/user/Home'
import FixturesPage from './components/user/Fixtures'
import ResultsPage from './components/user/Results'
import TablePage from './components/user/Table'
import TeamsPage from './components/user/Teams'
import StatsPage from './components/user/Stats'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/results"  element={<ResultsPage />} />
        <Route path="/table"    element={<TablePage />} />
        <Route path="/teams"    element={<TeamsPage />} />
        <Route path="/stats"    element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
