import './header.estilos.css';
import { Image } from "../Imagem";

export function Header(){
    return(

        <header>

            <div>

                <Image className='imgLogo' src='logo.png' alt='logo countext'/>
                <i class="fa-solid fa-sun"></i>
                
            </div>

        </header>

    )
}