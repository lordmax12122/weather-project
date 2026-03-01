import { Container } from "../Container/container";
import styles from "./signUpModal.css";

export const Sign = () => {
    return (
        <section className="sign">
            <Container>
                <div className="sign__box">
                <h2 className="sign__title">Sign up</h2>
                <form className="sign__form">
                    <div className="sign__block">
                        <label className="sign__label" for="username">Username</label>
                        <input className="sign__input" type="text" id="username" name="username" required></input>
                    </div>

                    <div className="sign__block">
                        <label className="sign__label" for="email">Email:</label>
                        <input className="sign__input" type="email" id="email" name="email" required></input>
                    </div>

                    <div className="sign__block">
                        <label className="sign__label" for="password">Password:</label>
                        <input className="sign__input" type="password" id="password" name="password" minlength="6"></input>
                    </div>

                    <button className="sign__button" type="submit">Sign up</button>
                </form>
                <p className="sign__desc">Already have an account? <span className="sign__span">Log In</span></p>
                </div>
            </Container>
        </section>
    )
}