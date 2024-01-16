import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <div className="user">
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzjBAcvt8wS1LDxUCGPAnFKeVlpn_n8YcQA&usqp=CAU"
            alt="profile-pic"
          />
        </div>
        <div className="name">Ruchi</div>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}
