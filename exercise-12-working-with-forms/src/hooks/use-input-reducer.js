import { useReducer } from "react";

export const VALUE_CHANGED = "valueChanged";
export const INPUT_BLUR = "inputBlur";
export const CLEAR = "clear";

const inputReducer = (state, action) => {

  let value = state.value;
  let isValid = state.isValid;
  let isTouched = state.isTouched;

  if (action.type === VALUE_CHANGED) {
    value = action.value;
    isValid = action.validateValue(action.value);
  }

  if (action.type === INPUT_BLUR) {
    isTouched = true;
  }

  if (action.type === CLEAR) {
    isTouched = false;
    value = '';
    isValid = false;
  }

  return {
    value,
    isValid,
    isTouched,
  };

};
const useInputReducer = (validateValue) => {

    const [inputState, distpachInput] = useReducer(inputReducer, {value:'', isValid:false, isTouched:false});
    
    const hasError = !inputState.isValid && inputState.isTouched;

    const blurHandler = (event) => {
      distpachInput({ type: INPUT_BLUR });
    };
  
    const valueChangeHandler = (event) => {
      distpachInput({
        type: VALUE_CHANGED,
        value: event.target.value,
        validateValue,
      });
    };

    const resetInput = () => {
      distpachInput({
        type: CLEAR,
      });
    }
  

    return {
        inputState,
        hasError,
        blurHandler,
        valueChangeHandler,
        resetInput
    }


};

export default useInputReducer;
