import styles from "./header.css";

export const Header = () => {
    return(
        <header className="header">
            <div className="header__div">
            <img src="./images/logo.png" alt="" />
            <ul className="header__ul">
                <li>
                    <p className="header__item">Who we are</p>
                </li>
                <li>
                    <p className="header__item">Contacts</p>
                </li>
                <li>
                    <p className="header__item">Menu</p>
                </li>
            </ul>
            <button className="header__button">Sign Up</button>
            <img src="./images/userheader.png" alt="" />
            </div>
        </header>
    )
}