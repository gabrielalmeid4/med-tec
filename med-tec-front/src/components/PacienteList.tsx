import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'
import api from '../services/api'

interface Paciente {
  cod_pac: number
  nome: string
  cpf: string
}

const PacienteList: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await api.get('/pacientes')
        setPacientes(response.data)
      } catch (error) {
        setErro('Erro ao buscar pacientes')
        console.error(error)
      }
    }

    fetchPacientes()
  }, [])

  return (
    <div className="container">
      <h1>Lista de Pacientes</h1>
      {erro ? (
        <p className="error">{erro}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes
              .sort((a, b) => a.cod_pac - b.cod_pac).map(paciente => (
              <tr key={paciente.cod_pac}>
                <td>{paciente.cod_pac}</td>
                <td>{paciente.nome}</td>
                <td>{paciente.cpf}</td>
                <td>
                  <Link to={`/edit/${paciente.cod_pac}`}>Editar</Link> |{' '}
                  <Link to={`/delete/${paciente.cod_pac}`}>Deletar</Link> |{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="add-paciente">
        <Link to="/add" className="button">
          Adicionar Paciente
        </Link>
      </div>
    </div>
  )
}

export default PacienteList