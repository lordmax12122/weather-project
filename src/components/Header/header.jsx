import { useState } from "react";
import "./header.css";
import { Container } from "../Container/container";
import { Sign } from "../SignUpModal/signUpModal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <Container>

        <div className="header__div">
          <img className="header__logo" src="/images/logo.png" alt="" />
          <ul className="header__ul">
            <li><p className="header__item">Who we are</p></li>
            <li><p className="header__item">Contacts</p></li>
            <li><p className="header__item">Menu</p></li>
          </ul>
          <button className="header__button" onClick={() => setIsModalOpen(true)}>Sign Up</button>
          <img className="header__user" src="/images/userheader.png" alt="" />
        </div>
        <div className="header__mobile">
          <img className="header__logo2" src="/images/logo.png" alt="" />
          <button
            className="header__button2"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
        {isOpen && (
          <div className="header__burger">
            <ul className="header__ul2">
              <li><p className="header__item">Who we are</p></li>
              <li><p className="header__item">Contacts</p></li>
              <li><p className="header__item">Menu</p></li>
            </ul>
            <div className="header__part">
              <img className="header__logo" src="/images/logo.png" alt="" />
              <button className="header__button" onClick={() => setIsModalOpen(true)}>Sign Up</button>
            </div>
          </div>
        )}
        {
          isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div onClick={(e) => e.stopPropagation()}>
                <Sign />
              </div>
            </div>
          )
        }
      </Container>
    </header>
  );
};

