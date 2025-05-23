import { useLocation } from 'react-router-dom';
import RegisterForm from '../../components/Register/RegisterForm';
import SignInForm from '../../components/SignIn/SignInForm';
import styles from './styles.module.scss';
import BackButton from '../../components/Back/BackButton';
import PageTransitionWrapper from '../../components/PageTransitionWrapper/PageTransitionWrapper';
import { useEffect } from 'react';

const AuthPage = () => {
    const location = useLocation();
    const isSignIn = location.pathname === "/signin";
    useEffect(() => {
        if (isSignIn) {
            document.title = "Sign in";
        } else {
            document.title = "Register";
        }
    }, [isSignIn]);
    return (
        <>
            <PageTransitionWrapper>
                <div className={styles.Auth__main}>
                    <BackButton />
                    <div className={styles.Auth__Layout}>
                        <div className={styles.AuthLayout_header}>
                            <h1 className={styles.AuthLayout_header_title}>
                                {isSignIn ?
                                    <span>Sign in to Fandom</span>
                                    : <span>Join Fandom Today</span>
                                }
                            </h1>
                            <p className={styles.AuthLayout_header_subtitle}>
                                The world's largest fan-generated entertainment & gaming platform.
                            </p>
                            <span className={styles.AuthLayout_header_icon}>
                                <img className={styles.AuthLayout_header_icon_img} src="https://wiki.archiveteam.org/images/b/bc/Fandom-icon.png" alt="" />
                            </span>
                        </div>
                        <div className={styles.AuthLayout_content}>

                            {isSignIn ? <SignInForm /> : <RegisterForm />}
                        </div>
                        <p className={styles.CaptchaTos_captchaTos}>
                            This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and <a href=""> Terms of Service </a> apply.
                        </p>
                    </div>
                </div>
            </PageTransitionWrapper>
        </>
    )
};

export default AuthPage;
