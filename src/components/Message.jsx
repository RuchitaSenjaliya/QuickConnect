import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="msg-info">
        <img
          src={`${
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }`}
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="msg-content">
        <div className="text">{message.text}</div>
        {message.img && <img src={message.img} alt="img" />}
      </div>
    </div>
  );
}
