import dp1 from "../assets/dp-1.jpg";
export default function Message() {
  return (
    <div className="message owner">
      <div className="msg-info">
        <img src={dp1} alt="" />
        <span>Just Now</span>
      </div>
      <div className="msg-content">
        <div className="text">How are you ?</div>
        {/* <img src={dp1} alt="" /> */}
      </div>
    </div>
  );
}
