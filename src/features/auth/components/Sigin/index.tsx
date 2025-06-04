import { useState } from "react";
import styles from './styles.module.scss';
import { FaGoogle, FaLock, FaUser } from "react-icons/fa";
import clsx from "clsx";
import { DiscordLoginButton, FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";

const SignInForm = () => {

    // const handleClose = () => setShow(false); // Hàm đóng modal
    return (
        <>
            <div className={styles.signin_formWrapper}>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Sign in
                        </h6>
                        <div className={styles.TextInput_inputs}>
                            <div className={styles.input_group}>
                                <label htmlFor="username" className={styles.input_label}>Username</label>
                                <input type="text" id="username" placeholder="Username" className={styles.input__field} />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="password" className={styles.input_label}>Password</label>
                                <input type="password" id="password" placeholder="Password" className={styles.input__field} />
                            </div>
                        </div>
                        <div >
                            <Link to="/reset-password" className={styles.Password_bottomAction}>Forgot Password?</Link>
                        </div>
                        <div className={styles.Submit_buttonWrapper}>
                            <button
                                className={clsx(styles.button__submit)}>
                                Sign In
                            </button> 
                        </div>
                        <div className={styles.TermsOfUse_termsOfUse}>
                            By continuing, you agree to Fandom's <a href="https://www.fandom.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="https://www.fandom.com/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
                        </div>
                        <div className={styles.RegisterLink_wrapper}>
                            <span className={styles.RegisterLink_signin_link}>
                                Don't have account? <Link to="/register" className={styles.RegisterLink_url}>Register now</Link>
                            </span>
                        </div>
                    </section>
                </div>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Sign in with account
                        </h6>
                        <GoogleLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Google login")}
                        />
                        <FacebookLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Facebook login")} />
                        <DiscordLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("Discord login")} />
                        <TwitterLoginButton  className={styles.smallSocialBtn}
                            onClick={() => console.log("LinkedIn login")} />
                    </section>
                </div>
            </div>
        </>
    );
}

export default SignInForm;