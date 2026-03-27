import './containerCards.style.css';
import { Cards } from '../Cards';
import { Section } from '../Section';
import { use } from 'react';
import AnalisadorContext from '../AnalisadorProvider/AnalisadorContext';

export function ContainerCards(){

    //recebendo as funcoes necessarias do analisador context
    const {contaCaracter, contaPalavras, contaSentencas} = use(AnalisadorContext);

    //array de objetos dos cards
    const cards = [
        {subTitle: 'Total Caracteres', subTiTleStyle: 'cardCaracteres', valor: contaCaracter()},
        {subTitle: 'Contagem Palavras', subTiTleStyle: 'cardPalavras', valor: contaPalavras()},
        {subTitle: 'Contagem Sentenças', subTiTleStyle: 'cardSentencas', valor: contaSentencas()}
    ]

    return(
        <Section className='containerCards d-flex flex-wrap justify-content-center'>

            
            {cards.map((card,index) => {
                //criacao dos cards com seus respectivos valores do objeto de arrays
                return <Cards key={index} qtdInfo={card.valor} subTitle={card.subTitle} subTitleClass={card.subTiTleStyle+' '+'cards'}/>
            })}

        </Section>
    )

}