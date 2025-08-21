import clsx from 'clsx';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className={styles.wds__global__footer}>
                <footer className={styles.global__footer}>
                    <div className={styles.global__footer__content}>
                        <div>
                            <h2 className={clsx(styles.global__footer__header)}>
                                <Link to="/" className={clsx("d-block")}>
                                    <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" alt="" style={{ width: "183px", height: "46px" }}
                                        className={styles.global__footer__header__logo} />
                                </Link>
                            </h2>
                            <section className={clsx(styles.global__footer__section, styles.global__footer__section__fandom__overview)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Explore properties
                                </h3>
                                <ul className={styles.global__footer__links}>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Fandom</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            Muthead</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Fanatical</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className={clsx(styles.global__footer__section)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Follow us
                                </h3>
                                <ul className={clsx(styles.global__footer__links, styles.global__footer__links_icon)}>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            <FaFacebook className={styles.global__footer__link_icon_detail} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            <FaTwitter className={styles.global__footer__link_icon_detail} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            <FaYoutube className={styles.global__footer__link_icon_detail} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            <FaYoutube className={styles.global__footer__link_icon_detail} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>
                                            <FaYoutube className={styles.global__footer__link_icon_detail} />
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div>
                            <section className={clsx(styles.global__footer__section, styles.global__footer__section__site__overview)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Overview
                                </h3>
                                <ul className={styles.global__footer__links}>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>What is Fandom?</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>About </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Press</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Term of Use</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>DIgital Services Act</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Global Sitemap</Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div>
                            <section className={clsx(styles.global__footer__section, styles.global__footer__section__community)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Community
                                </h3>
                                <ul className={styles.global__footer__links}>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Community Central</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Support</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Help</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className={clsx(styles.global__footer__section)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Advertise
                                </h3>
                                <ul className={styles.global__footer__links}>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Media Kit</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.global__footer__link}>Contact</Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div>
                            <section className={clsx(styles.global__footer__section)}>
                                <h3 className={styles.global__footer__section_header}>
                                    Fandom Apps
                                </h3>
                                <div>
                                    Take your favorite fandoms with you and never miss a beat.
                                </div>

                            </section>
                            <section className={clsx(styles.global__footer__section, styles.global__footer__section__fandom__stores)}>
                                <img className={styles.global__footer__icon}
                                    src="https://static.wikia.nocookie.net/6c42ce6a-b205-41f5-82c6-5011721932e7" alt="" />
                                <ul className={styles.global__footer__links}>
                                    <li>
                                        <Link to="/" className={clsx(styles.global__footer__link, "d-block")} style={{ marginBottom: "1rem" }}>
                                            <img className={styles.global__footer__link__icon}
                                                src="https://static.wikia.nocookie.net/3f46912f-45a8-47f0-ac9d-6dca02c3a5ca" alt="" />
                                        </Link>
                                        <Link to="/" className={clsx(styles.global__footer__link, "d-block")}>
                                            <img className={styles.global__footer__link__icon}
                                                src="https://static.wikia.nocookie.net/6e8f2e52-ab5a-427f-a836-ab57168161ec" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;