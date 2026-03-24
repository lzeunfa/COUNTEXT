import './containerCards.style.css';
import { Cards } from '../Cards';
import { Section } from '../Section';

export function ContainerCards(){
    const subTitles = ['Total Caracteres', 'Contagem Palavras', 'Contagem Sentenças']
    const subTiTleStyle = ['cardCaracteres', 'cardPalavras', 'cardSentencas'];

    return(
        <Section className='containerCards'>

            {subTitles.map((subs,index) => {
                return <Cards key={index} subTitle={subs} subTitleClass={subTiTleStyle[index]+' '+'cards'}/>
            })}

        </Section>
    )

}