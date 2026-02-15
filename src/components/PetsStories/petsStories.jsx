import { Container } from "../Container/container";
import styles from "./petsStories.css";

export const PetsStories = () => {
    return (
        <section>
            <Container>
        <div className="pets">
            <h2 className="pets__title">Interacting with our pets</h2>
            <ul className="pets__list">
                <li className="pets__item">
                    <img className="pets__img" src="./images/rect1.png" alt="" />
                    <p className="pets__desc">Rescue pups pose as ghosts in festive photo shoot</p>
                </li>
                <li className="pets__item">
                    <img className="pets__img" src="./images/rect2.png" alt="" />
                    <p className="pets__desc">Cat interrupts morning coffee on sunny Washington morning</p>
                </li>
                <li className="pets__item">
                    <img className="pets__img" src="./images/rect3.png" alt="" />
                    <p className="pets__desc">New study finds dogs pay more attention to women</p>
                </li>
                <li className="pets__item">
                    <img className="pets__img" src="./images/rect4.png" alt="" />
                    <p className="pets__desc">Petting dogs gives health benefit, even if they are not yours</p>
                </li>
            </ul>
            <button className="pets__button">See more</button>
        </div>
        </Container>
        </section>
    )
}