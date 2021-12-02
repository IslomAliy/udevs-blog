import Container from "../Container";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container>
        <div className="header-menu-wrapper">
          <div className="logo">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <div className="right-side">
            <img src="images/notifications.svg" alt="notifications" className="notifications"/>
            <button className="header-menu-button">Войти</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
