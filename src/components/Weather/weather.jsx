import { Container } from "../Container/container";
import styles from "./weather.css";

export const Weather = () => {
    return (
        <section>
            <Container>
        <div className="weather">
            <div className="weather__cards">
                <div className="weather__card">
                    <div className="weather__names">
                        <p className="weather__name">Prague</p>
                        <p className="weather__name">Czech Republic</p>
                    </div>
                    <h3 className="weather__hour">14:00</h3>
                    <button className="weather__button">Hourly forecast</button>
                    <div className="weather__dates">
                        <p className="weather__date">02.08.2026</p>
                        <p className="weather__date">Friday</p>
                    </div>
                    <img className="weather__sun" src="./images/sun.png" alt="" />
                    <h2 className="weather__temp">22*C</h2>
                    <div className="weather__buttons">
                        <img className="weather__addons" src="./images/refresh.png" alt="" />
                        <img className="weather__addons" src="./images/heart.png" alt="" />
                        <button className="weather__button2">See more</button>
                        <img className="weather__addons" src="./images/delete.png" alt="" />
                    </div>
                </div>
                <div className="weather__card">
                    <div className="weather__names">
                        <p className="weather__name">Prague</p>
                        <p className="weather__name">Czech Republic</p>
                    </div>
                    <h3 className="weather__hour">14:00</h3>
                    <button className="weather__button">Hourly forecast</button>
                    <div className="weather__dates">
                        <p className="weather__date">02.08.2026</p>
                        <p className="weather__date">Friday</p>
                    </div>
                    <img className="weather__sun" src="./images/sun.png" alt="" />
                    <h2 className="weather__temp">22*C</h2>
                    <div className="weather__buttons">
                        <img className="weather__addons" src="./images/refresh.png" alt="" />
                        <img className="weather__addons" src="./images/heart.png" alt="" />
                        <button className="weather__button2">See more</button>
                        <img className="weather__addons" src="./images/delete.png" alt="" />
                    </div>
                </div>
                <div className="weather__card">
                    <div className="weather__names">
                        <p className="weather__name">Prague</p>
                        <p className="weather__name">Czech Republic</p>
                    </div>
                    <h3 className="weather__hour">14:00</h3>
                    <button className="weather__button">Hourly forecast</button>
                    <div className="weather__dates">
                        <p className="weather__date">02.08.2026</p>
                        <p className="weather__date">Friday</p>
                    </div>
                    <img className="weather__sun" src="./images/sun.png" alt="" />
                    <h2 className="weather__temp">22*C</h2>
                    <div className="weather__buttons">
                        <img className="weather__addons" src="./images/refresh.png" alt="" />
                        <img className="weather__addons" src="./images/heart.png" alt="" />
                        <button className="weather__button2">See more</button>
                        <img className="weather__addons" src="./images/delete.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </Container>
        </section>
    )
}