import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <br />
      <p>This page cannot be found..</p>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
