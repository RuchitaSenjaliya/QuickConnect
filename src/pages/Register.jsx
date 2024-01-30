import Logo from "../components/Logo";
import addAvatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(displayName);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErr(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
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
          <div className="form-title">Register</div>
          {err && (
            <div className="text-center text-danger w-100 mt-3">
              Something went wrong
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="Display Name"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="pwd" id="pwd" placeholder="Password" />
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file" className="avatar">
              <img src={addAvatar} alt="" className="add-avatar" />
              <span>Add an avatar</span>
            </label>
            <div className="text-center mt-4">
              <button className="btn-primary">Sign up</button>
            </div>
            <div className="account">
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
