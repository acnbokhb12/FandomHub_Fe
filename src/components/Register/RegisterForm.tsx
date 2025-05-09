import { useState } from "react";
import styles from './styles.module.scss';
import { FaGoogle, FaLock, FaUser } from "react-icons/fa";
import clsx from "clsx";
import { DiscordLoginButton, FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <>
            <div className={styles.signin_formWrapper}>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Register
                        </h6>
                        <div className={styles.TextInput_inputs}>
                            <div className={styles.input_group}>
                                <label htmlFor="email" className={styles.input_label}>Email</label>
                                <input type="text" id="email" placeholder="Email" className={styles.input__field} />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="username" className={styles.input_label}>Username</label>
                                <input type="text" id="username" placeholder="Username" className={styles.input__field} />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="password" className={styles.input_label}>Password</label>
                                <input type="password" id="password" placeholder="Password" className={styles.input__field} />
                            </div>
                            <div className={clsx(styles.input_group, styles.Date_input)}>
                                <label htmlFor="birthday" className={styles.input_label}>Birthday</label>
                                <input type="date" id="birthday" placeholder="birthday" className={styles.input__field} />
                            </div>
                        </div>
                        <div className={styles.registration_checkboxes}>
                            <div className={styles.registration_checkboxes_item}>
                                <input type="checkbox" name="marketing-allowed" id="marketing-allowed" /> 
                                <label htmlFor="marketing-allowed">
                                   <span> Email me about Fandom news and events</span>
                                </label>
                            </div>
                            <div className={styles.registration_checkboxes_item}>
                                <input type="checkbox" name="tos-consent" id="tos-consent" /> 
                                <label htmlFor="tos-consent">
                                    <span>
                                        I agree to Fandom's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.Submit_buttonWrapper}>
                            <button
                                className={clsx(styles.button__submit)}>
                                Register
                            </button>
                        </div>
                        <div className={styles.TermsOfUse_termsOfUse}>
                            By continuing, you agree to Fandom's <a href="https://www.fandom.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="https://www.fandom.com/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
                        </div>
                        <div className={styles.RegisterLink_wrapper}>
                            <span className={styles.RegisterLink_signin_link}>
                                Already have an account? <Link to="/signin" className={styles.RegisterLink_url}>Sign in</Link>
                            </span>
                        </div>
                    </section>
                </div>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Connect an account
                        </h6>
                        <GoogleLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Google login")}
                        />
                        <FacebookLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Facebook login")} />
                        <DiscordLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Discord login")} />
                        <TwitterLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("LinkedIn login")} />
                    </section>
                </div>
            </div>
        </>
    );
};
export default RegisterForm;