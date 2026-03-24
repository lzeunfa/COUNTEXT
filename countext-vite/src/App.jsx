import './App.css';
import { Header } from './components/Header';
import { Titulo } from './components/Titulo';
import { ContainerTextArea } from './components/ContainerTextArea';
import { ContainerCards } from './components/ContainerCards';
import { ContainerDensidade } from './components/ContainerDensidade';

function App() {

  return (
    
    <main>

      <Header></Header>

      <Titulo>Analise seu texto em <br/> tempo real!</Titulo>

      <ContainerTextArea></ContainerTextArea>

      <ContainerCards/>

      <ContainerDensidade/>

    </main>

  )

}

export default App
