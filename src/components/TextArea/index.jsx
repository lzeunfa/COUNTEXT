import './textArea.style.css';
import { use } from 'react';
import AnalisadorContext from '../AnalisadorProvider/AnalisadorContext';

export function TextArea(props){

    //recebe o setTexto para atualizar estado do texto
    const {changeTexto,textoExibido,isChecked} = use(AnalisadorContext);

    return (
        //atualizando o changeTexto com o valor presente no textarea
        <textarea {...props} readOnly={isChecked} value={textoExibido} onChange={(e) => changeTexto(e.target.value)}></textarea>
    )
}