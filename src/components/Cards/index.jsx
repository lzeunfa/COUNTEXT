import './cards.style.css';
import { Container } from '../Container';
import { use } from 'react';
import TemaContext from '../TemaProvider/TemaContext';

export function Cards( {subTitle, subTitleClass, qtdInfo, ...props} ){

    const {tema} = use(TemaContext);

    return(
        <Container {...props} className={subTitleClass}>
            <p className={`infoNum${tema} infoNum`}>{qtdInfo}</p>
            <p className={`subTitleP${tema} subTitleP`}>{subTitle}</p>
        </Container>
    )
}