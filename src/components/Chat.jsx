import { FaVideo } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-info">
        <div className="name">Adi</div>
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
      <Messages />
      <Input />
    </div>
  );
}
