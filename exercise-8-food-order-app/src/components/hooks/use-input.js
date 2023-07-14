import { useReducer } from "react";

const VALUE_CHANGED = 'VC';
const BLUR_HANDLER = 'BH';
const CLEAR = 'CL';

const inputReducer = (state, action) => {

    let value = state.value;
    let isTouched = state.isTouched;


    if(action.type===VALUE_CHANGED){
        value = action.value;
    }
        
    if(action.type===BLUR_HANDLER)
        isTouched = true;

    if(action.type===CLEAR)
        return initialState;

    return {value, isTouched}
    
}

const initialState = {value:'', isTouched:false};
const useInput = (validateValue) => {

    const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

    const onChangeInputHanlder = (event) => {
        
        dispatchInput({type:VALUE_CHANGED, value:event.target.value});
    }

    const onBlurHandler = () => {
        dispatchInput({type:BLUR_HANDLER})
    }

    const clearInput = () => {
        dispatchInput({type:CLEAR});
    };

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    return {
        value:inputState.value,
        hasError,
        isValid,
        onChangeInputHanlder,
        onBlurHandler,
        clearInput
    }

}

export default useInput;