import {makeAutoObservable, makeObservable, observable} from "mobx";


class FormStore {
    valueName = ''
    valueSecName = ''
    error = 'Hello'

    constructor() {
        makeObservable(this,{
            error: observable
        })
    }
    ErrorForm () {
            this.error = "ERRROROROROR"
    }

}

export default new FormStore()





/*
import {action, observable} from "mobx"

type FormStoreStateType = {
    valueName: string,
    valueSecName: string,
    error: string,
    ErrorForm: (error: string) => void
}

const FormStore: FormStoreStateType = observable( {
    valueName: '',
    valueSecName: '',
    error: '',


    ErrorForm: action(function (error: string) {

            FormStore.error = error
        }
    )

    /!*if(FormStore.valueName.length < 3) {
        FormStore.error = 'enter the required text'
    } else if(FormStore.valueSecName.length < 3) {
        FormStore.error = 'enter the required text'
    } else if(FormStore.valueName === this.valueSecName){
        FormStore.error = 'enter the required text'
    } else{
        return
    }*!/

})

export default FormStore*/
