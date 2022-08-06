import classes from './Auth.module.css';
import {authActions, counterActions} from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import {useRef} from "react";


const Auth = () => {
    const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const formSubmitHandler = (event) => {
      event.preventDefault();
      const emailValue = emailInputRef.current.value;
      const passwordValue = passwordInputRef.current.value;
      console.log(emailValue, passwordValue);
      if(emailValue === 'test@test' && passwordValue === '1') {
          dispatch(authActions.login())
      }

  }

    // const incrHandler = () => {
    //     dispatch(counterActions.increment());
    // };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
