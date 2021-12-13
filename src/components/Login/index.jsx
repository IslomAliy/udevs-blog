import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthorized = localStorage.getItem("isAuthorized");
  const [user, setUser] = useState({});

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const staticUser = {
  //     email: "falonchi@gmail.com",
  //     password: "12345",
  //   };

  //   if (email === staticUser.email && password === staticUser.password) {
  //     localStorage.setItem("isAuthorized", true);
  //     setIsOpen(false);
  //   } else {
  //     alert(
  //       "If you don't know exact login and password, you'd better get lost!"
  //     );
  //   }
  // };

  onAuthStateChanged(auth, (curentUser) => {
    setUser(curentUser);
  });

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuthorized", true);
      setIsOpen(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("isAuthorized");
    document.location.reload(true);
  };
  return (
    <>
      <div className={`modal ${isOpen ? "visible" : ""}`}>
        <div className="modal-wrapper">
          <h3 className="modal-heading">Вход на Udevs News</h3>
          <form className="modal-form" onSubmit={logIn}>
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
              Log In
            </button>
            <p className="sign-up">
              Нет учетной записи? <Link to="/signup">Зарегистрироваться</Link>
            </p>
          </form>
        </div>
      </div>
      {isOpen && (
        <button onClick={() => setIsOpen(false)}>
          <div className="overlay" />
        </button>
      )}
      {/* right side */}
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
          <p className="user-email">
            User logged in with:{" "}
            <span className="user-email-inner">{user?.email}</span>
          </p>
        )}
        {isAuthorized && (
          <div className="dropdown">
            <button className="dropdown-btn">
              <img
                src="/images/person.jpg"
                alt="person-img"
                className="persons-img-logged-in"
              />
            </button>
            <div className="dropdown-content">
              <Link to="/createpost" className="dropdown-content-link">Написать публикацию</Link>
              <Link to="/" className="dropdown-content-link">Избранные</Link>
              <button className="dropdown-content-btn" onClick={logOut}>Выйти</button>
            </div>
          </div>
        )}
        {/* {isAuthorized && (
          <button className="log-out-btn" onClick={logOut}>
            Log Out
          </button>
        )} */}
      </div>
    </>
  );
};

export default Login;
