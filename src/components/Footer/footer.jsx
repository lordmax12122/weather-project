import { Container } from "../Container/container";
import styles from "./footer.css";

export const Footer = () => {
    return (
        <section className="footer">
            <Container>
                <div className="footer__box">
                    <img className="footer__logo" src="./images/logo.png" alt="" />
                    <div className="footer__adress">
                        <h2 className="footer__title" >Adress</h2>
                        <p className="footer__adresses">Svobody str. 35 Khmelnytskyi Ukraine</p>
                    </div>
                    <div className="footer__cont">
                        <h2 className="footer__title">Contact us</h2>
                        <div className="footer__contact">
                        <img className="footer__contacts" src="./images/instagram.png" alt="" />
                        <img className="footer__contacts" src="./images/facebook.png" alt="" />
                        <img className="footer__contacts" src="./images/whatsapp.png" alt="" />
                    </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}