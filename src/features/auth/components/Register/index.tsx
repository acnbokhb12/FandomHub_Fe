// import { useState } from "react";
import styles from './styles.module.scss';
import clsx from "clsx";
import { DiscordLoginButton, FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";
import { RegisterPayLoad } from '@/api'
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';


const today = new Date().toISOString().split('T')[0];
const hundredYearsAgo = new Date();
hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
const minDate = hundredYearsAgo.toISOString().split('T')[0];
const RegisterForm = () => {
    const submitBtn = useRef<HTMLButtonElement>(null);
    const {
        register: formRegister,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<RegisterPayLoad>({
        mode: 'onChange'
    });
    const { register, errorMessage } = useAuth();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (data: RegisterPayLoad) => {
        if (submitBtn.current) submitBtn.current.disabled = true;
 
        setTimeout(() => {
            if (submitBtn.current) submitBtn.current.disabled = false;
        }, 2000);

        const success = await register(data);
        if (success) {
            navigate('/');
        } else {
            toast.error(errorMessage || "Register failed");
        }
    }, [register, errorMessage, navigate]);

    return (
        <>
            <div className={styles.signin_formWrapper}>
                <div className={styles.signin_form}>
                    <section className={styles.signin_section}>
                        <h6 className={clsx(styles.signin_sectionTitle, styles.signin_sectionSocialTitle)}>
                            Register
                        </h6>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.TextInput_inputs}>
                                <div className={styles.input_group}>
                                    <label htmlFor="email" className={styles.input_label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className={styles.input__field}
                                        {...formRegister('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Please enter a valid email address'
                                            }
                                        })}
                                    />
                                    {errors.email && <p className='text-danger mb-0' style={{ fontSize: '12px' }}>{errors.email.message}</p>}
                                </div>
                                <div className={styles.input_group}>
                                    <label htmlFor="username" className={styles.input_label}>Username</label>
                                    <input
                                        type="text"
                                        id="userName"
                                        placeholder="Username"
                                        className={styles.input__field}
                                        {...formRegister('userName', { 
                                            required: 'Username is required',
                                            minLength: {
                                                value: 3,
                                                message: 'Username must be at least 3 characters'
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: 'Username must not exceed 20 characters'
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_]+$/,
                                                message: 'Username can only contain letters, numbers and underscores'
                                            }
                                        })}
                                    />
                                    {errors.userName && <p className='text-danger mb-0' style={{ fontSize: '12px' }}>{errors.userName.message}</p>}
                                </div>
                                <div className={styles.input_group}>
                                    <label htmlFor="password" className={styles.input_label}>Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        className={styles.input__field}
                                        {...formRegister('password', {
                                            required: 'Password is required',
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,21}$/,
                                                message: 'Password must be 8-21 characters long and include uppercase, lowercase, number, and special character',
                                            },
                                        })}
                                    />
                                    {errors.password && <p className='text-danger mb-0' style={{ fontSize: '12px' }}>{errors.password.message}</p>}
                                </div>
                                <div className={clsx(styles.input_group, styles.Date_input)}>
                                    <label htmlFor="birthday" className={styles.input_label}>Birthday</label>
                                    <input
                                        type="date"
                                        id="birthDay"
                                        min={minDate}
                                        max={today}
                                        className={styles.input__field}
                                        {...formRegister('birthDay', { 
                                            required: 'Birthday is required',
                                            validate: value => {
                                                const date = new Date(value);
                                                const today = new Date();
                                                const age = today.getFullYear() - date.getFullYear();
                                                if (age < 13) {
                                                    return 'You must be at least 13 years old';
                                                }
                                                return true;
                                            }
                                        })}
                                    />
                                    {errors.birthDay && <p className='text-danger mb-0' style={{ fontSize: '12px' }}>{errors.birthDay.message}</p>}
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
                                <button type='submit' disabled={!isValid}
                                    ref={submitBtn}
                                    className={clsx(styles.button__submit)}>
                                    Register
                                </button>
                            </div>
                        </form>
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