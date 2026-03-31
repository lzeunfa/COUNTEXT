import { useState } from "react";
import AnalisadorContext from "./AnalisadorContext";

export function AnalisadorProvider({ children }){

    //use state para armazenar estado do texto original
    const [texto,setTexto] = useState('');

    const [textoExibido,setTextoExibido] = useState('');

    //use state para armazenar estado checkbox
    const [isChecked, setIsChecked] = useState(false);

    //atualiza os estados de texto, orignal e exibido
    const changeTexto = (valor) =>{
        setTexto(valor);
        setTextoExibido(valor);
    }

    //funcao para calcular a qtd total de letras apartir da contagem geral de caracteres
    const qtdLetras = () =>{
        const qtdTotalLetras = contaCaracter().replace(/[\.,;:\?!…\s]/g, '');

        return qtdTotalLetras.length;
    }

    //funcao para contagem de caracteres
    const contaCaracter = () =>{
        const qtdCaracteres = textoExibido.length;

        return qtdCaracteres;
    };

    //funcao para contagem de palavras
    const contaPalavras = () =>{

        if(texto.trim() === ''){
            return 0;
        }

        const palavras = texto.trim().split(/\s+/);

        return palavras.length;
    }

    //funcao para contagem de sentencas
    const contaSentencas = () =>{
        const sentencas = (textoExibido.match(/[.!?]/g) || []).length;

        return sentencas;
    }

    //troca de estados do checkbox
    const toggleCheck = () => {

        //troca do texto exibido de acordo com a mudanca de estado do checkbox
        setIsChecked(prev => {
            const novoEstado = !prev;
            setTextoExibido(novoEstado ? texto.replace(/\s/g, '') : texto);
            return novoEstado;
        });

    }

    return(
        //passando as funcoes no value para uso de contexto
        <AnalisadorContext value={{contaCaracter, contaPalavras, contaSentencas, toggleCheck, isChecked, changeTexto, textoExibido}}>
            {children}
        </AnalisadorContext>
    )
}