import './cards.style.css';
import { Container } from '../Container';

export function Cards( {subTitle, subTitleClass, ...props} ){
    return(
        <Container {...props} className={subTitleClass}>
            <p className='infoNum'>X</p>
            <p className='subTitleP'>{subTitle}</p>
        </Container>
    )
}