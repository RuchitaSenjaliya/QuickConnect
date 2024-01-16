import Logo from "../components/Logo";

const Login = () => {
  return (
    <>
      <div className="register form-container">
        <div className="form-wrapper">
          <div className=" form-logo">
            <Logo />
          </div>
          <div className="form-title">Login</div>
          <form action="">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="pwd" id="pwd" placeholder="Password" />

            <div className="text-center mt-4">
              <button className="btn-primary">Sign in</button>
            </div>

            <div className="account">
              Don&apos;t have an account?
              <a href="#">Register</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
