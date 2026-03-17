import './header.estilos.css';
import { Image } from "../Imagem";
import { Container } from '../Container';

export function Header(){
    return(

        <header>

            <Container className='headerContainer'>
                
                <Image className='imgLogo' src='logo.png' alt='logo countext'/>
                <i className="fa-solid fa-sun iconTheme"></i>

            </Container>
            

        </header>

    )
}