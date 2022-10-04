import React, {useState} from 'react';
import '../StylesPages/Login.scss';

export const Login = () => {

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [turnLogin, setTurnLogin] = useState<boolean>(false);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit")
    setTurnLogin(!turnLogin);
  };

  return (
    <form className="login" onSubmit={(e) => handleSubmit(e)}>

      <h1>Wellcome !</h1>

      <div className="frame">

        <h2>Login</h2>

        <div className="subframe">
          <label>Username:</label>
          <input
            type="text"
            value={user}
            onChange={(event) => handleUser(event)}
            autoComplete="off"
            required placeholder="Username" />
        </div>

        <div className="subframe">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            required
            placeholder="Password" />
        </div>

        <div className="divbtn--login">
          <button type="submit" className="btn--login">
            Enter
          </button>
        </div>

        {turnLogin ? (
          <div className="loginok">
            <p>Login OK !</p>
          </div>
          ) : (
          <div className="notification">
            <p>Not LoggedIn</p>
          </div>
        )}

      </div>
    </form>
  )
}