import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./SignUp.module.scss";
import Container from "../Container";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

//   console.log(user.email);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert('You are successfuly signed up. Now you can Sign In to your account.')
    } catch (error) {
      alert(error.message);
    } 
    setRegisterEmail("");
    setRegisterPassword("");
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.signUp}>
          <h3 className={styles.signUpHeading}>Регистрация Udevs news</h3>
          <form className={styles.signUpForm}>
            <input
              type="email"
              placeholder="Email"
              className={styles.formInput}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.formInput}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button type="submit" className={styles.formButton} onClick={register}>
              Регистрация
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
