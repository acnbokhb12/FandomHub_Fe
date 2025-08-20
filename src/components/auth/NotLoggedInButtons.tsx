import styles from '@/pages/home/styles.module.scss';
import { FaRegUserCircle } from 'react-icons/fa';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';


export const NotLoggedInButtons = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/signin");
    };
    const handleRegisterClick = () => {
        navigate("/register");
    };
    return (
        <div className={styles.contain__btn_auth_detail}>
            <button
                type="button" className={clsx(styles.btn__login)}
                onClick={handleLoginClick}
            >
                <FaRegUserCircle style={{
                    fontSize: "1.8rem",
                    marginRight: "8px"
                }} />  Sign in
            </button>
            <div className={styles.contain__subbtn_auth}>
                <div className={styles.sign_in__register_text}>
                    Don't have an account?
                </div>
                <button
                    type="button" className={clsx(styles.btn__inside_auth, styles.btn_inside_register)}
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
                <hr />
                <button
                    type="button" className={clsx(styles.btn__inside_auth, styles.btn_inside_login)}
                    onClick={handleLoginClick}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};
