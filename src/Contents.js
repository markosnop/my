function Contents({ nome, lista }) {
  return (
    <div>
      <h2>Aprendendo React</h2>
      <p>Seja bem vindo, {nome}!</p>
      <h3>Lista de tarefas:</h3>
      <ul>
        {lista.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome_tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contents;
