"use client"

import useInput from "@/hooks/useInput";
import SubmitButton from '@/components/forms/submitButton';

const SignUpData = () => {
    
        const {
            value: enteredName,
            isValid: enteredNameIsValid,
            hasError: nameInputHasError,
            valueChangeHandler: nameChangedHandler,
            inputBlurHandler: nameBlurHandler,
            reset: resetNameInput,
          } = useInput((value) => value.trim() !== '');
        
          const {
            value: enteredEmail,
            isValid: enteredEmailIsValid,
            hasError: emailInputHasError,
            valueChangeHandler: emailChangeHandler,
            inputBlurHandler: emailBlurHandler,
            reset: resetEmailInput,
          } = useInput((value) => value.includes('@'));

          const {
            value: enteredNumber,
            isValid: enteredNumberIsValid,
            hasError: numberInputHasError,
            valueChangeHandler: numberChangeHandler,
            inputBlurHandler: numberBlurHandler,
            reset: resetNumberInput,
          } = useInput((value) => value.includes('@')); //validation function

          const {
            value: enteredPassword,
            isValid: enteredPasswordIsValid,
            hasError: passwordInputHasError,
            valueChangeHandler: passwordChangeHandler,
            inputBlurHandler: passwordBlurHandler,
            reset: resetPasswordInput,
          } = useInput((value) => value.length === 8);

          const {
            value: enteredCountry,
            isValid: enteredCountryIsValid,
            hasError: countryInputHasError,
            valueChangeHandler: countryChangeHandler,
            inputBlurHandler: countryBlurHandler,
            reset: resetCountryInput,
          } = useInput((value) => value.includes('@'));
        
          let formIsValid = false;
        
          if (enteredNameIsValid && enteredEmailIsValid && enteredCountryIsValid && enteredPasswordIsValid &&enteredNumberIsValid) {
            formIsValid = true;
          }
        
          const formSubmissionHandler = (event) => {
            event.preventDefault();
        
            if (!enteredNameIsValid) {
              return;
            }
        
            console.log(enteredName);
        
           
            resetNameInput();
            resetEmailInput();
            resetCountryInput();
            resetPasswordInput();
            resetNumberInput();
          };
        
          return (
            <form onSubmit={formSubmissionHandler} className="border border-gray-400 rounded-2xl p-12">
              <div>
                <label htmlFor='name'>Your Full Name</label></div>
                <div className="border rounded border-gray-500 p-2">
                <input className="w-full"
                  type='text'
                  id='name'
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                />
                {nameInputHasError && (
                  <p className='text-red-500 bg-red-200 border rounded'>Name must not be empty.</p>
                )}
              </div>
              <div>
                <label htmlFor='email'>Your E-Mail</label></div>
                <div className="border rounded border-gray-500 p-2">
                <input className="w-full"
                  type='email'
                  id='email'
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  value={enteredEmail}
                />
                {emailInputHasError && (
                  <p className='text-red-500 bg-red-200 border rounded'>Please enter a valid email.</p>
                )}
              </div>
              <div>
                <label htmlFor='number'>Your Contact Number</label></div>
                <div className="border rounded border-gray-500 p-2">
                <input className="w-full"
                  type='text'
                  id='number'
                  onChange={numberChangeHandler}
                  onBlur={numberBlurHandler}
                  value={enteredNumber}
                />
                {numberInputHasError && (
                  <p className='text-red-500 bg-red-200 border rounded'>Please enter a valid number.</p>
                )}
              </div>
              <div>
                <label htmlFor='pass'>Your Password</label></div>
                <div className="border rounded border-gray-500 p-2">
                <input className="w-full"
                  type='password'
                  id='pass'
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  value={enteredPassword}
                />
                {passwordInputHasError && (
                  <p className='text-red-500 bg-red-200 border rounded'>Please enter a valid password.</p>
                )}
              </div>
              <div>
                <label htmlFor='country'>Your Country</label></div>
                <div className="border rounded border-gray-500 p-2">
                <input className="w-full"
                  type='text'
                  id='country'
                  onChange={countryChangeHandler}
                  onBlur={countryBlurHandler}
                  value={enteredCountry}
                />
                {countryInputHasError && (
                  <p className='text-red-500 bg-red-200 border rounded'>Please enter a valid Country.</p>
                )}
              </div>
              <SubmitButton disabled={!formIsValid} text="Sign up"/>
            </form>
     );
}
 
export default SignUpData;