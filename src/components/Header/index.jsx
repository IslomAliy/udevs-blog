import Container from "../Container";
import "./header.scss";
import { Link } from "react-router-dom";

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
          <div className="right-side">
            <img
              src="../images/notifications.svg"
              alt="notifications"
              className="notifications"
            />
            <button className="header-menu-button">Войти</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
