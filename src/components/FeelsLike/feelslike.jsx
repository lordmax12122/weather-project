import { Container } from "../Container/container";
import styles from "./feelslike.css";

export const FeelsLike = () => {
    return (
        <section className="feelslike">
            <Container>
                <div className="feelslike__box">
                    <ul className="feelslike__list">
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Feels like</p>
                            <h2 className="feelslike__text">29.2℃</h2>
                            <img className="feelslike__img" src="./images/image5.svg" alt="" />
                        </li>
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Min ℃</p>
                            <h2 className="feelslike__text">27.9℃</h2>
                            <p className="feelslike__desc">Max ℃</p>
                            <h2 className="feelslike__text">27.9℃</h2>
                        </li>
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Humidity</p>
                            <h2 className="feelslike__text">59%</h2>
                            <img className="feelslike__img" src="./images/image3.svg" alt="" />
                        </li>
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Pressure</p>
                            <h2 className="feelslike__text">1007 Pa</h2>
                            <img className="feelslike__img" src="./images/image1.svg" alt="" />
                        </li>
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Wind speed</p>
                            <h2 className="feelslike__text">3.17 m/s</h2>
                            <img className="feelslike__img" src="./images/image4.svg" alt="" />
                        </li>
                        <li className="feelslike__item">
                            <p className="feelslike__desc">Visibility</p>
                            <h2 className="feelslike__text">Unlimited</h2>
                            <img className="feelslike__img" src="./images/image2.svg" alt="" />
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}