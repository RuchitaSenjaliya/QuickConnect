import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error shadow">
      <div className="error-msg">Something Went Wrong</div>
      <Link to="/">Go back to home</Link>
      <Link to="/login"> Login </Link>
    </div>
  );
}
