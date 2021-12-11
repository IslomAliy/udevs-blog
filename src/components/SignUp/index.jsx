import React from 'react'
import Header from '../Header';
import Footer from '../Footer'
import styles from './SignUp.module.scss';
import Container from '../Container';

const SignUp = () => {
    return (
        <>
            <Header/>
                <Container>
                    <div className={styles.signUp}>
                        <h3 className={styles.signUpHeading}>Регистрация Udevs news</h3>
                        <form className={styles.signUpForm}>
                            <input type="email" placeholder="Email" className={styles.formInput}/>
                            <input type="password" placeholder="Password" className={styles.formInput}/>
                            <button type="submit" className={styles.formButton}>Регистрация</button>
                        </form>
                    </div>
                </Container>
            <Footer/>
        </>
    )
}

export default SignUp
