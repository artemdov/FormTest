import React, {ChangeEvent, useState} from "react"
import './App.css'
import {observer} from "mobx-react-lite";
import './Form.scss'
import formStore from './store/form'

type FormStoreType = {
    valueSecName: string,
    valueName: string,
    error: string,
    ErrorForm: (error: string) => void
}

type FormPropsType = {
    FormStore: FormStoreType
}


export const Form: React.FC<FormPropsType> = observer(() => {
    console.log('render')
    const [valueName, setValueName] = useState<string>('')
    const [valueSecName, setValueSecName] = useState<string>('')
    const [change, setChange] = useState<boolean>(false)

    const handleValueNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueName(e.target.value)
    }
    const handleValueSecNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSecName(e.target.value)
    }

    const handleDisplayChange = () => {
        if (valueName.length < 3) {
            return console.log( formStore.ErrorForm())
        }
        setChange(true)
    }
    const handleDisplayModalChange = () => {
        setChange(false)
    }


    return (
        <div className='Display'>

            <div className='Form'>
                {!change && <div className='Form-input-button'>

                    <input className='Form-input-name' type="text"
                           placeholder="Имя"
                           value={valueName}
                           onChange={handleValueNameChange}
                    />
                    <input className='Form-input-secName' type="text"
                           placeholder="Фамилия"
                           value={valueSecName}
                           onChange={handleValueSecNameChange}
                    />

                    <button className='Button' onClick={handleDisplayChange}>Привет</button>
                </div>
                }

                {change && <div className='Form-modal'>
                    {`Здравствуйте, ${valueName} ${valueSecName}`}
                    <button className='Button-modal' onClick={handleDisplayModalChange}>x</button>
                </div>}


            </div>
        </div>
    )
})