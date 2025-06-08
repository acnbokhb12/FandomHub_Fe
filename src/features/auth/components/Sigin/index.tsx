import styles from './styles.module.scss';
import clsx from "clsx";
import { useRef } from "react";
import { DiscordLoginButton, FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { SigninPayload } from '@/api/auth/authTypes';
import { RiErrorWarningLine } from "react-icons/ri";
import { useAuth } from '@/features/auth/hooks/useAuth'; 

const SignInForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<SigninPayload>({
        mode: 'onChange'
    });

    const navigate = useNavigate();
    const submitBtn = useRef<HTMLButtonElement>(null);
    const { sigin, errorMessage } = useAuth();
    const submitForm = async (data: SigninPayload) => {
        if (submitBtn.current) submitBtn.current.disabled = true;

        const success = await sigin(data);
        if (success) {
            navigate('/');
        }

        if (submitBtn.current) submitBtn.current.disabled = false;

    }
    return (
        <>
            <div className={styles.signin_formWrapper}>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Sign in
                        </h6>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div className={styles.TextInput_inputs}>
                                <div className={styles.input_group}>
                                    <label htmlFor="username" className={styles.input_label}>Username</label>
                                    <input type="text" id="username"
                                        placeholder="Username" className={styles.input__field}
                                        {...register('username', { required: 'Username is required' })}
                                    />
                                </div>
                                <div className={styles.input_group}>
                                    <label htmlFor="password" className={styles.input_label}>Password</label>
                                    <input type="password" id="password"
                                        placeholder="Password" className={styles.input__field}
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                </div>
                                {errorMessage && (
                                    <div className={clsx("d-flex", styles.fail_login)} >
                                        <div>
                                            <RiErrorWarningLine size={16} color="#bf0017" />
                                        </div>
                                        <div>
                                            <span className={styles.fail_login_text}>{errorMessage}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div >
                                <Link to="/reset-password" className={styles.Password_bottomAction}>Forgot Password?</Link>
                            </div>
                            <div className={styles.Submit_buttonWrapper}>
                                <button disabled={!isValid} type="submit" ref={submitBtn}
                                    className={clsx(styles.button__submit)}>
                                    Sign In
                                </button>
                            </div>
                        </form>
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
                        <TwitterLoginButton className={styles.smallSocialBtn}
                            onClick={() => console.log("LinkedIn login")} />
                    </section>
                </div>
            </div>
        </>
    );
}

export default SignInForm;