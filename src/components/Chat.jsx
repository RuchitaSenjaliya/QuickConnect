import { FaVideo } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chat-info">
        <div className="name">{data.user.displayName}</div>
        <div className="chat-icons">
          <span>
            <FaVideo size={20} />
          </span>
          <span>
            <IoPersonAddSharp size={20} />
          </span>
          <span>
            <IoIosMore size={20} />
          </span>
        </div>
      </div>
      {data.user.displayName ? (
        <Messages />
      ) : (
        <div className="text-center text-white empty-msg">
          Connect with your friends by selecting <br />
          their chat from sidebar
        </div>
      )}
      <Input />
    </div>
  );
}
