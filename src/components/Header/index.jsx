import Container from "../Container";
import "./header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthorized = localStorage.getItem("isAuthorized");

  const onSubmit = (e) => {
    e.preventDefault();

    const staticUser = {
      email: "falonchi@gmail.com",
      password: "12345",
    };

    if (email === staticUser.email && password === staticUser.password) {
      localStorage.setItem("isAuthorized", true);
      setIsOpen(false);
    } else {
      alert(
        "If you don't know exact login and password, you'd better get lost!"
      );
    }
  };

  const logOut = () => {
    localStorage.removeItem('isAuthorized')
    document.location.reload(true)
  }

  return (
    <div className="header-wrapper">
      <Container>
        <div className={`modal ${isOpen ? "visible" : ""}`}>
          <div className="modal-wrapper">
            <h3 className="modal-heading">Вход на udevs news</h3>
            <form className="modal-form" onSubmit={onSubmit}>
              <input
                className="email-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="password-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="modal-button">
                Register
              </button>
            </form>
          </div>
        </div>
        {isOpen && (
          <button onClick={() => setIsOpen(false)}>
            <div className="overlay" />
          </button>
        )}
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
            {!isAuthorized && (
              <button
                className="header-menu-button"
                onClick={() => setIsOpen(true)}
              >
                Войти
              </button>
            )}
            {isAuthorized && (
              <img
                src="/images/person.jpg"
                alt="person-img"
                className="persons-img-logged-in"
              />
            )}
            {isAuthorized && (
              <button
                className="log-out-btn"
                onClick={logOut}
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
