import { MdAttachFile } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

export default function Input() {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Type Something..." />
      <div className="send">
        <span>
          <MdAttachFile size={20} />
        </span>
        <span>
          <LuImagePlus size={20} />
        </span>
        <button className="btn-send">Send</button>
      </div>
    </div>
  );
}
