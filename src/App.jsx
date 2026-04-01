import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Titulo } from './components/Titulo';
import { ContainerTextArea } from './components/ContainerTextArea';
import { ContainerCards } from './components/ContainerCards';
import { ContainerDensidade } from './components/ContainerDensidade';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    
    <>

      <Header></Header>

      <Main>
        

        <Titulo>Analise seu texto em <br/> tempo real!</Titulo>

        <ContainerTextArea></ContainerTextArea>

        <ContainerCards/>

        <ContainerDensidade/>

        

      </Main>

      <Footer/>

    </>

  )

}

export default App
