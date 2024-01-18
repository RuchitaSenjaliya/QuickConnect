import Logo from "./Logo";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Logo />
      <div className="user">
        <div className="profile">
          <img
            src={currentUser.photoURL}
            alt="profile-pic"
            className="img-fluid"
          />
        </div>
        {/* <div className="name">{currentUser.displayName}</div> */}
        <button className="logout" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
}
