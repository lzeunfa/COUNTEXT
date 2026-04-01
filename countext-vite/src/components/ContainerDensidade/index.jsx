import './containerDensidade.style.css';
import { Container } from '../Container';
import { Section } from '../Section';
import { use } from 'react';
import TemaContext from '../TemaProvider/TemaContext';
import AnalisadorContext from '../AnalisadorProvider/AnalisadorContext';

export function ContainerDensidade(){

    const {tema} = use(TemaContext);
    const {densidadeTexto} = use(AnalisadorContext);

    //variavel que recebe o array de objetos com a densidade do texto
    let letrasPresentes = densidadeTexto();

    return(
        <Section className='containerAreaDensidade d-flex justify-content-center'>

            <Container className='containerEnvelopador'>

                <h1 className='text-center pb-3 pt-2'>Densidade de letras</h1>

                
                {/*criacao das tags para mostrar os dados da densidade do texto, acessando as propriedades da variavel que recebeu o arr de objetos sobre a densidade*/
                letrasPresentes.map( (letra, index) => {

                    return(
                        <Container key={index} className='containerPorcentos d-flex justify-content-between'>

                            <pre className={`p${tema} p`}>{letra.letra}</pre>
                            
                            <Container className='barraPorcento'>
                                <div className='preenchimentoBarra' style={{ width: `${letra.percentual}%` }}></div>
                            </Container>

                            <pre className={`p${tema} p`}>{letra.quantidade > 9.99 ? letra.quantidade : `0${letra.quantidade}`}({letra.percentual > 9.99 ? letra.percentual : `0${letra.percentual}`}%)</pre>

                        </Container>
                    )

                })}

            </Container>

        </Section>
    )
}