import './containerTextArea.style.css';
import { TextArea } from '../TextArea';
import { Checkbox } from '../Checkbox';

export function ContainerTextArea(){
    return(
        <div className='containerTextArea'>
            <TextArea className='textArea' id='textArea' placeholder='Comece a digitar aqui ou cole seu texto!' />
            <Checkbox></Checkbox>
        </div>
    )
}