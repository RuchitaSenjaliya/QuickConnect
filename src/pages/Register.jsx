import Logo from "../components/Logo";
import addAvatar from "../assets/addAvatar.png";

const Register = () => {
  return (
    <>
      <div className="register form-container">
        <div className="form-wrapper">
          <div className=" form-logo">
            <Logo />
          </div>
          <div className="form-title">Register</div>
          <form action="">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Display Name"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="pwd" id="pwd" placeholder="Password" />
            <input
              type="file"
              name="profile"
              id="profile"
              style={{ display: "none" }}
            />
            <label htmlFor="profile" className="avatar">
              <img src={addAvatar} alt="" className="add-avatar" />
              <span>Add an avatar</span>
            </label>
            <div className="text-center mt-4">
              <button className="btn-primary">Sign up</button>
            </div>
            <div className="account">
              Already have an account?
              <a href="#">Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
