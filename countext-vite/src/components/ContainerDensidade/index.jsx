import './containerDensidade.style.css';
import { Container } from '../Container';
import { Section } from '../Section';

export function ContainerDensidade(){

    const letrasPresentes = ['E','B','F']

    return(
        <Section className='containerAreaDensidade'>

            <Container className='containerEnvelopador'>

                <h1>Densidade de letras</h1>
                {letrasPresentes.map( (letra, index) => {
                    return(
                        <Container key={index} className='containerPorcentos'>
                            <p>{letra}</p>
                            <Container className='barraPorcento'>
                                <div className='preenchimentoBarra'></div>
                            </Container>
                            <p>QTD(X%)</p>
                        </Container>
                    )
                })}

            </Container>

        </Section>
    )
}