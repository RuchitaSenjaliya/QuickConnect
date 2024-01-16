import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}
