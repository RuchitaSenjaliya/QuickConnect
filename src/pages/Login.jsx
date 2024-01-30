import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErr(true);
    }
  };
  return (
    <>
      <div className="register form-container">
        <div className="form-wrapper">
          <div className=" form-logo">
            <Logo />
          </div>
          <div className="form-title">Login</div>
          {err && (
            <div className="text-center text-danger w-100 mt-3">
              Something went wrong
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="pwd" id="pwd" placeholder="Password" />

            <div className="text-center mt-4">
              <button className="btn-primary">Sign in</button>
            </div>

            <div className="account">
              Don&apos;t have an account?
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
