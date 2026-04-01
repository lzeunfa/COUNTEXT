import './containerTextArea.style.css';
import { TextArea } from '../TextArea';
import { Checkbox } from '../Checkbox';
import { Section } from '../Section';

export function ContainerTextArea(){

    return(
        <Section className='containerTextArea d-flex align-items-center flex-column w-100'>

            <TextArea className='textArea' id='textArea' placeholder='Comece a digitar aqui ou cole seu texto!' />

            <Checkbox></Checkbox>
            
        </Section>
    )
}