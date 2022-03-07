import { useState } from "react";

const useInput = (validateValue) => {
    const [EnteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(EnteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const InputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: EnteredValue,
        IsValid: valueIsValid,
        hasError,
        valueChangeHandler,
        InputBlurHandler,
        reset
    };
 }

export default useInput;