import { ChangeEvent, useState } from 'react';
import { Formatter } from '../../utils/formatter';
import ShowFormLayout from '../ShowFormLayout/ShowFormLayout';

type Props = {
    text: string,
    handleDataChange: (data: string)=>void,
    values: string[]
}
const AddSingleItemForm = ({text, handleDataChange, values}: Props) =>{
    const [data, setData] = useState("");
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setData(e.target.value);
    }
    const handleSave = () =>{
        handleDataChange(data);
        setData("");
    }
    return(
        <fieldset>
            <legend>{text[text.length-1]==="y"? Formatter.convertToPlural(text): text+"s" }</legend>
            {values.length>0 &&
                <ul>
                    {values.map((value, idx)=>{
                        return <li key={value + idx}>
                            {value}
                            <button>x</button>
                        </li>
                    })}
                </ul>
            }
            <ShowFormLayout addLinkText={`Add ${text}`} onSave={handleSave}>
                <label>
                    <span>{text}:</span>
                    <input name={text} onInput={handleInputChange} value={data}/>
                </label>
            </ShowFormLayout>
        </fieldset>
    )
}
export default AddSingleItemForm;