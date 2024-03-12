import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">D&D-GO</h1>
          </Link>
        </div>
        <div>
          <>
            <Link className="btn btn-lg btn-info m-2" to="/about">
              About me
            </Link>
            <Link className="btn btn-lg btn-info m-2" to="/portfolio">
              Portfolio
            </Link>
            <Link className="btn btn-lg btn-info m-2" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/resume">
              Resume
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
