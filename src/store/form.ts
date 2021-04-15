import {makeObservable, observable} from "mobx";

class FormStore {
    error = ''

    constructor() {
        makeObservable(this, {
            error: observable
        })
    }

    ErrorForm(value: string) {
        this.error = value
    }

}
export default new FormStore()




//еще код ниже пробовал реализовать без классов с другим синтаксисом
/*
import {action, observable} from "mobx"

type FormStoreStateType = {
    error: string,
    ErrorForm: (error: string) => void
}
const FormStore: FormStoreStateType = observable( {
    error: ''

    ErrorForm: action(function (error: string) {
            FormStore.error = error
        }
    )

})

export default FormStore*/
