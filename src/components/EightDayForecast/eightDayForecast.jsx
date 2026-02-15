import { Container } from "../Container/container";
import styles from "./eightDayForecast.css";

export const EightDayForecast = () => {
    return (
        <section className="eightday">
            <Container>
                <div className="eightday__box">
                    <h2 className="eightday__title">8-day forecast</h2>
                    <ul className="eightday__list">
                        <li className="eightday__item">
                            <p className="eightday__desc">Fri, Oct 13</p>
                            <div className="eightday__info">
                            <img src="./images/weather1.png" alt="" />
                            <p className="eightday__desc">23/14℃</p>
                            </div>
                            <p className="eightday__desc">light rain</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Sat, Oct 14</p>
                            <div className="eightday__info">
                            <img src="./images/weather1.png" alt="" />
                            <p className="eightday__desc">22/10℃</p>
                            </div>
                            <p className="eightday__desc">light rain</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Sun, Oct 15</p>
                            <div className="eightday__info">
                            <img src="./images/weather1.png" alt="" />
                            <p className="eightday__desc">13/6℃</p>
                            </div>
                            <p className="eightday__desc">light rain</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Mon, Oct 16</p>
                            <div className="eightday__info">
                            <img src="./images/weather4.png" alt="" />
                            <p className="eightday__desc">12/4℃</p>
                            </div>
                            <p className="eightday__desc">few clouds</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Tue, Oct 17</p>
                            <div className="eightday__info">
                            <img src="./images/weather5.png" alt="" />
                            <p className="eightday__desc">12/4℃</p>
                            </div>
                            <p className="eightday__desc">overcast clouds</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Wed, Oct 18</p>
                            <div className="eightday__info">
                            <img src="./images/weather3.png" alt="" />
                            <p className="eightday__desc">13/3℃</p>
                            </div>
                            <p className="eightday__desc">clear sky</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Thu, Oct 19</p>
                            <div className="eightday__info">
                            <img src="./images/weather5.png" alt="" />
                            <p className="eightday__desc">12/5℃</p>
                            </div>
                            <p className="eightday__desc">overcast clouds</p>
                        </li>
                        <li className="eightday__item">
                            <p className="eightday__desc">Fri, Oct 20</p>
                            <div className="eightday__info">
                            <img src="./images/weather2.png" alt="" />
                            <p className="eightday__desc">9/3℃</p>
                            </div>
                            <p className="eightday__desc">scattered clouds</p>
                        </li>
                    </ul>
                </div>
        </Container>
        </section>
    )
}