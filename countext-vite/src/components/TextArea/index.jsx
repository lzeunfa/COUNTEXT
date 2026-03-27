import './textArea.style.css';
import { use } from 'react';
import AnalisadorContext from '../AnalisadorProvider/AnalisadorContext';

export function TextArea(props){

    //recebe o setTexto para atualizar estado do texto
    const {setTexto} = use(AnalisadorContext);

    return (
        //atualizando o setTexto com o valor presente no textarea
        <textarea {...props} onChange={(e) => setTexto(e.target.value)}></textarea>
    )
}