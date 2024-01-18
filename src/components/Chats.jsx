import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Chats() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // console.log(Object.entries(chats));

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className="single-user"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}>
              <div className="dp">
                <img src={chat[1].userInfo.photoURL} alt="" />
              </div>
              <div className="detail">
                <div className="name">{chat[1].userInfo.displayName}</div>
                <div className="last-msg">{chat[1].lastMessage?.text}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
