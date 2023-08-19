import { useState } from 'react'
function Contents({ nome, lista }) {
  const [ tarefas, setTarefas ] = useState(lista)
  const [ tarefa, setTarefa ] = useState('')
  
  const addTarefa = (event)=>{
    event.preventDefault()
    const tarefaObject ={
      nome : tarefa ,
      id: tarefas.legth + 1,
    }
    setTarefas( tarefas.concat (tarefaObject))
    setTarefa('')
    console.log('botão clicado' , EventTarget)
  }
  
  const handleTarefaChange = (event)=> {
    console.log(event.target.value)
    setTarefa(event.target.value)

  }
  return (
    <div className="container">
      <h2>Aprendendo React</h2>
      <p>Seja bem vindo, {nome}!</p>
      <h3>Lista de tarefas:</h3>
      <ul>
        {lista.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome_tarefa}</li>
        ))}
      </ul>
      <hr />
      <form onSubmit={addTarefa} >
      <div className="mb-3">
        <label htmlFor="tarefa" className="form-label">Tarefa:</label>
        <input type="text" placeholder="Digite a tarefa. . ." className="form-control"
        value = {tarefa}
        onChange ={handleTarefaChange}
        />
        <button className="btn btn-primary mt-4">Adicionar</button>
        </div>
      </form>
    </div>
  );
}

export default Contents;
