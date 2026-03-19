import './checkbox.style.css';
import { Container } from '../Container';

export function Checkbox(){
    return (
        <Container>
            <input type="checkbox" className='removeSpaces' id='removeSpaces'/>
            <label htmlFor="removeSpaces" id='labelCheckbox'>Remover os espaços</label>
        </Container>
        
    )
}