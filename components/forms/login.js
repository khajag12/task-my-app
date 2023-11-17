"use client"

import useInput from "@/hooks/useInput";
import SubmitButton from '@/components/forms/submitButton';
import Link from 'next/link';
import { useState } from "react";

const Login = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [clientName,setClientName]=useState("");


  const handleClickLogin = () => {
    setIsLoggedIn(true);
    
  };

  if(isLoggedIn){
    setClientName(enteredEmail);
  }

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
      } = useInput((value) => value.includes('@'));

      const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
      } = useInput((value) => value.length === 8);

      let formIsValid = false;
        
          if (enteredEmailIsValid && enteredPasswordIsValid) {
            formIsValid = true;
          }

          const formSubmissionHandler = (event) => {
            event.preventDefault();
        
            if (!enteredEmailIsValid) {
              return;
            }
        
            console.log(enteredName);
        
            resetEmailInput();
            resetPasswordInput();
            
          };
          

    return (
        

        <div className="flex bg-white">
        <form onSubmit={formSubmissionHandler} className="m-8  border rounded-2xl p-12">
            <div>
                <label htmlFor='email'>Your E-Mail</label></div>
                <div className="border p-2">
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
                <label htmlFor='pass'>Your Password</label></div>
                <div className="border p-2">
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

              <SubmitButton onClick={handleClickLogin} disabled={!formIsValid} text="Sign in"/>

              <div className="flex mt-16 ml-12">
                <h1 className="mt-6 mr-2">Don't have an account?</h1>
                <Link  className="ml-2 bg-violet-800 text-white font-bold py-2 px-8 rounded-3xl mt-4 hover:bg-violet-900 focus:outline-none focus:shadow-outline" href="/">Create an account</Link>
              </div>
        </form>
        </div>
    );
}
 
export default Login;