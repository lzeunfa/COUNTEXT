import { useState } from "react";
import AnalisadorContext from "./AnalisadorContext";

export function AnalisadorProvider({ children }){

    //use state para armazenar estado do texto
    const [texto,setTexto] = useState('');

    //funcao para contagem de caracteres
    const contaCaracter = () =>{
        const qtdCaracteres = texto.length;

        return qtdCaracteres;
    };

    //funcao para contagem de palavras
    const contaPalavras = () =>{

        if(texto === ''){
            return 0;
        }

        const palavras = texto.trim().split(/\s+/);

        return palavras.length;
    }

    //funcao para contagem de sentencas
    const contaSentencas = () =>{
        const sentencas = (texto.match(/[\.!\?]/g) || []).length;

        return sentencas;
    }

    return(
        //passando as funcoes no value para uso de contexto
        <AnalisadorContext value={{setTexto, contaCaracter, contaPalavras, contaSentencas}}>
            {children}
        </AnalisadorContext>
    )
}