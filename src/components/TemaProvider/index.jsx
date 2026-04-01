import TemaContext from "./TemaContext";
import { useEffect, useState } from "react";

export function CountextProvider({children}){

    //criando o useState para trocas de temas
    //tema atual e setTema para trocar o tema iniciando com light
    const [tema,setTema] = useState('light');

    //funcao para realizar a troca de tema e atualizar o estado
    const toggleTema = () => {
        setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
    }

    //atualiza o background color do body
    useEffect(() =>{

            if(tema === 'light'){
                document.body.style.backgroundColor = 'rgb(251, 251, 251)';
            }else{
                document.body.style.backgroundColor = '#101525';
            }
            
        },[tema]);

    return(
        <TemaContext value={{tema , toggleTema}}>
            {children}
        </TemaContext>
    )
}