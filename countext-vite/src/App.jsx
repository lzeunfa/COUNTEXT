import './App.css';
import { Header } from './components/Header';
import { Titulo } from './components/Titulo';
import { ContainerTextArea } from './components/ContainerTextArea';
import { ContainerCards } from './components/ContainerCards';

function App() {

  return (
    
    <main>

      <Header></Header>

      <Titulo>Analise seu texto em <br/> tempo real!</Titulo>

      <ContainerTextArea></ContainerTextArea>

      <ContainerCards/>

    </main>

  )

}

export default App
