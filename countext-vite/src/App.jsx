import './App.css';
import { Header } from './components/Header';
import { Titulo } from './components/Titulo';
import { ContainerTextArea } from './components/ContainerTextArea';
import { ContainerCards } from './components/ContainerCards';
import { ContainerDensidade } from './components/ContainerDensidade';
import { Footer } from './components/Footer';

function App() {

  return (
    
    <>

      <Header></Header>

      <main>
        

        <Titulo>Analise seu texto em <br/> tempo real!</Titulo>

        <ContainerTextArea></ContainerTextArea>

        <ContainerCards/>

        <ContainerDensidade/>

        

      </main>

      <Footer/>

    </>

  )

}

export default App
