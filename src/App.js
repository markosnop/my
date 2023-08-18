import { Outlet } from 'react-router-dom';
import Contents from './Contents';
import Footer from './Footer';
import './Header';
import Header from './Header';

function App() {
  const nome = 'Marcus'
  const ano = 2023

  const listadeTarefas =[
    { id:1, nome_tarefa: "estudar html"},
    { id:2, nome_tarefa: "estudar css"},
    { id:3, nome_tarefa: "estudar java script"},
    { id:4, nome_tarefa: "estudar react"}
  ]

  return (
    <div>
      <Header />
      <Outlet/>
      <Contents nome={nome} lista={listadeTarefas}/>
      <Footer nome={nome} ano={ano}/>
    </div>
  );
}

export default App;
