import React, { useContext,useState } from 'react'
import Select from './Select'
import InputForm from './InputForm'
import ButtonForm from './ButtonForm'
import { DataContext } from '../../context/EntriesContext'
import { v4 as uuidv4 } from 'uuid';
import { FormInputValidation } from '../../utils/FormInputValidation'


function Form() {
    const {data,setData} = useContext(DataContext)

    const [type, setType] = useState("income");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    
    return (
        <div className="mx-auto max-w-xl px-5">
            <form className="flex gap-2" onSubmit={(e)=>{
                e.preventDefault()
                if(FormInputValidation(title,value)){
                    setData([
                    ...data,
                    {
                      id: uuidv4(),
                      desc: title,
                      ammount: parseFloat(value),
                      type: type,
                    },
                  ]);
                }
            }} >
                <Select type={type} setType={setType}/>
                <InputForm pvalue={title} psetValue={setTitle} id="description" type="text" name="description" class="flex-1" placeholder="Add description"/>
                <InputForm pvalue={value} psetValue={setValue} id="value" type="number" name="value" class="w-20" placeholder="Value" />
                <ButtonForm />
            </form>
        </div>
    )
}

export default Form