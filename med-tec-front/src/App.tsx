import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PacienteList from './components/PacienteList'
import AddPaciente from './components/AddPaciente'
import EditPaciente from './components/EditPaciente'
import DeletePaciente from './components/DeletePaciente'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PacienteList />} />
        <Route path="/add" element={<AddPaciente />} />
        <Route path="/edit/:cod_pac" element={<EditPaciente />} />
        <Route path="/delete/:cod_pac" element={<DeletePaciente />} />
      </Routes>
    </Router>
  )
}

export default App
