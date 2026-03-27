import './containerDensidade.style.css';
import { Container } from '../Container';
import { Section } from '../Section';
import { use } from 'react';
import TemaContext from '../TemaProvider/TemaContext';

export function ContainerDensidade(){

    const letrasPresentes = ['E','B','F']

    const {tema} = use(TemaContext);

    return(
        <Section className='containerAreaDensidade d-flex justify-content-center'>

            <Container className='containerEnvelopador'>

                <h1 className='text-center pb-3 pt-2'>Densidade de letras</h1>

                {letrasPresentes.map( (letra, index) => {

                    return(
                        <Container key={index} className='containerPorcentos d-flex justify-content-between'>

                            <p className={`p${tema}`}>{letra}</p>
                            
                            <Container className='barraPorcento'>
                                <div className='preenchimentoBarra'></div>
                            </Container>

                            <p className={`p${tema}`}>QTD(X%)</p>

                        </Container>
                    )

                })}

            </Container>

        </Section>
    )
}