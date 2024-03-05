import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li><Link to="/" className="link1"><img
              src="https://bookshelf.themerex.net/wp-content/uploads/2021/07/Logo-invert.png"
              class="img-fluid rounded-top w-50"
              alt=""
            />
            </Link></li>
          </ul>
          <ul className="header-btn">
            <li><Link to="/Login" className="link1">Login</Link></li>
            <li><Link to="/Signup" className="link1">Register</Link></li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  };
  
  export default Layout;