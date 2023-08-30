import { useState, ChangeEvent, FormEvent } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { authSignUp } from "../../features/applicationSlice";
// import { AppDispatch, RootState } from "../../app/store";
import style from "./Login.module.css";
import { Link } from 'react-router-dom';



export const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const error = useSelector((state:RootState)=> state.application.error)as string | null
  // const dispatch = useDispatch<AppDispatch>()
  const handleSingUp = (e: FormEvent) => {
    e.preventDefault();
    setLogin("");
    setPassword("");
    // dispatch(authSignUp({_id: "", login, password}))
  };

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // if(error){
  //   return <div>{error}</div>
  // }
  return (
    <div className={style.container}>

    <div className={style.form__signIn}>
      <h1>Login Form</h1>
      <form onSubmit={handleSingUp}>
        <h4>Username</h4>
        <input
          onChange={handleSetName}
          value={login}
          type="text"
          name=""
          id=""
        />
        <h4>Password</h4>
        <input onChange={handleSetPass} value={password} type="password" />
        <button>Login</button>
      </form>
      <p>Don`t have an account? <Link to='/auth'>Signup</Link></p>
    </div>
    </div>
  );
};
