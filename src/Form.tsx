import React, {ChangeEvent, useState} from "react"
import './App.css'
import {observer} from "mobx-react-lite";
import './Form.scss'
import formStore from './store/form'

type FormStoreType = {
    error: string,
    ErrorForm: (error: string) => void
}

type FormPropsType = {
    FormStore: FormStoreType
}


export const Form: React.FC<FormPropsType> = observer(() => {

    const [valueName, setValueName] = useState<string>('')
    const [valueSurName, setValueSurName] = useState<string>('')
    const [change, setChange] = useState<boolean>(false)

    const handleValueNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueName(e.target.value)
    }
    const handleValueSecNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSurName(e.target.value)
    }

    const handleDisplayChange = () => {
        if (valueName.length < 3) {
            return formStore.ErrorForm('enter the correct name')
        } else if (valueSurName.length < 3) {
            return formStore.ErrorForm('enter the correct surname')
        } else if (valueName === valueSurName) {
            return formStore.ErrorForm('enter correct data')
        }
        setChange(true)
    }
    const handleDisplayModalChange = () => {
        setChange(false)
    }

    const validateName = valueName === valueSurName || valueName.length < 3
    const validateSurName = valueName === valueSurName || valueSurName.length < 3
    return (
        <div className='Display'>

            <div className='Form'>
                {!change && <div className='Form-input-button'>

                    <input className='Form-input-name' type="text"
                           placeholder="Имя"
                           value={valueName}
                           onChange={handleValueNameChange}
                    />
                    {validateName && formStore.error && <div className='Validate-name'>{formStore.error}</div>}
                    <input className='Form-input-surname' type="text"
                           placeholder="Фамилия"
                           value={valueSurName}
                           onChange={handleValueSecNameChange}
                    />
                    {validateSurName && formStore.error && <div className='Validate-surname'>{formStore.error}</div>}

                    <button className='Button' onClick={handleDisplayChange}>Готово</button>
                </div>
                }

                {change && <div className='Form-modal'>
                    {`Здравствуйте, ${valueName} ${valueSurName}`}
                    <button className='Button-modal' onClick={handleDisplayModalChange}>x</button>
                </div>}


            </div>
        </div>
    )
})