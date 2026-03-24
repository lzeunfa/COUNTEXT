import './containerCards.style.css';
import { Cards } from '../Cards';
import { Container } from '../Container';

export function ContainerCards(){
    const subTitles = ['Total Caracteres', 'Contagem Palavras', 'Contagem Sentenças']
    const subTiTleStyle = ['cardCaracteres', 'cardPalavras', 'cardSentencas'];

    return(
        <Container className='containerCards'>

            {subTitles.map((subs,index) => {
                return <Cards key={index} subTitle={subs} subTitleClass={subTiTleStyle[index]+' '+'cards'}/>
            })}

        </Container>
    )

}