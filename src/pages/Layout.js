import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li><Link to="/" className="link1">Home</Link></li>
          </ul>
          <ul>
            <li><Link to="/Login" className="link1">Login</Link></li>
            <li><Link to="/Signup" className="link1">Signup</Link></li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  };
  
  export default Layout;