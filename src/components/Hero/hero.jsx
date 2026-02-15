import styles from "./hero.css";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <h1 className="hero__title">Weather dashboard</h1>
                <div className="hero__addons">
                    <h2 className="hero__desc1">Create your personal list of favorite cities and always be aware of the weather.</h2>
                    <p className="hero__border"></p>
                    <h2 className="hero__desc2">October 2023 Friday, 13th</h2>
                </div>
                <input className="hero__search" type="text"
                    placeholder="Search location" />
            </div>
        </section>
    )
}