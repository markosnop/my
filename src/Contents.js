import { useState } from 'react'
import ExibeTarefas from './ExibeTarefas'

function Contents({ nome, lista }) {

  const [tarefas, setTarefas] = useState(lista)
  const [tarefa, setTarefa] = useState('')

  const addTarefa = (event) => {
    event.preventDefault()
    const tarefaObject = {
      id: tarefas.length + 1,
      nome_tarefa: tarefa
    }
    console.log(tarefaObject)
    setTarefas(tarefas.concat(tarefaObject))
    console.log(tarefas)
    setTarefa('')
    console.log('botão clicado', event.target)
  }

  const handleTarefaChange = (event) => {
    console.log(event.target.value)
    setTarefa(event.target.value)
  }

  return (
    <div className="container">
      <h2>Aprendendo React</h2>
      <p>Seja bem vindo, {nome}!</p>
      <h3>Lista de tarefas:</h3>
      <ExibeTarefas tarefas={tarefas} />
      <hr />
      <form onSubmit={addTarefa}>
        <div className="mb-3">
          <label htmlFor="tarefa" className="form-label">
            Tarefa:
          </label>
          <input
            type="text"
            placeholder="Digite a tarefa..."
            className="form-control"
            value={tarefa}
            onChange={handleTarefaChange}
          />
          <button className="btn btn-primary mt-4">Adicionar</button>
        </div>
      </form>
    </div>
  );
}

export default Contents;
