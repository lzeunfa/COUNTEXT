import './checkbox.style.css';
import { Container } from '../Container';
import { use } from 'react';
import TemaContext from '../TemaProvider/TemaContext';

export function Checkbox(){

    const {tema} = use(TemaContext);

    return (
        <Container>
            <input type="checkbox" className='removeSpaces' id='removeSpaces'/>
            <label className={`label${tema}`} htmlFor="removeSpaces" id='labelCheckbox'>Remover os espaços</label>
        </Container>
        
    )
}