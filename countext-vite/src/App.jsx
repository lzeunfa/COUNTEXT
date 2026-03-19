import './App.css';
import { Header } from './components/Header';
import { Titulo } from './components/Titulo';
import { ContainerTextArea } from './components/ContainerTextArea';

function App() {

  return (
    
    <main>

      <Header></Header>

      <Titulo>Analise seu texto em <br/> tempo real!</Titulo>

      <ContainerTextArea></ContainerTextArea>

    </main>

  )

}

export default App
