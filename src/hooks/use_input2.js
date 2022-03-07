import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {

    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: true
        };
    }
    if (action.type === 'BLUR') {
        return {
            ...state,
            isTouched: true
        }
    }
    if (action.type === 'RESET') {
        return initialInputState;
    }
    return initialInputState
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)
    

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    }

    const InputBlurHandler = () => {
        dispatch({ type: 'BLUR' });
    }

    const reset = () => {
        dispatch({ type: 'RESET' });
    }

    return {
        value: inputState.value,
        IsValid: valueIsValid,
        hasError,
        valueChangeHandler,
        InputBlurHandler,
        reset
    };
 }

export default useInput;