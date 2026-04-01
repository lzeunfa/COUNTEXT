import './checkbox.style.css';
import { Container } from '../Container';
import { use } from 'react';
import TemaContext from '../TemaProvider/TemaContext';
import AnalisadorContext from '../AnalisadorProvider/AnalisadorContext';

export function Checkbox(){

    const {tema} = use(TemaContext);
    const {toggleCheck, isChecked} = use(AnalisadorContext)

    return (
        <Container>
            <input type="checkbox" className='removeSpaces' checked={isChecked} id='removeSpaces' onChange={()=> toggleCheck()}/>
            <label className={`label${tema}`} htmlFor="removeSpaces" id='labelCheckbox'>Remover os espaços</label>
        </Container>
        
    )
}