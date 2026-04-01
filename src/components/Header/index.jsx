import './header.style.css';
import { Image } from "../Imagem";
import { Container } from '../Container';
import TemaContext from '../TemaProvider/TemaContext';
import { use } from 'react';

export function Header(){

    const {toggleTema,tema} = use(TemaContext);

    return(

        <header className={`${tema}Header header`}>

            <Container className='headerContainer d-flex justify-content-between align-items-center'>
                
                <figure className='m-0'>
                    <Image className='imgLogo' src='logo.png' alt='logo countext'/>
                </figure>
                <i className={`fa-solid fa-sun iconTheme i${tema}`} onClick={() => toggleTema()}></i>

            </Container>
            

        </header>

    )
}