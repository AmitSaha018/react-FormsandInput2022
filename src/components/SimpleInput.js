import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== "" && value.includes("@"))

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
    
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = EmailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {EmailInputHasError && (
          <p className="error-text">Please enter a valid E-mail!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
