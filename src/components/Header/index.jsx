import Container from "../Container";
import "./header.scss";
import { Link } from "react-router-dom";
import Login from "../Login";

const Header = () => {

  return (
    <div className="header-wrapper">
      <Container>
      
        <div className="header-menu-wrapper">
          <div className="logo">
            <Link to="/">
              <img src="../images/logo.svg" alt="logo" />
            </Link>
          </div>
          <Login/>
        </div>
      </Container>
    </div>
  );
};

export default Header;
