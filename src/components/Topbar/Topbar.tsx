import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import styles from './styles.module.scss';
import { RiDiscussLine } from "react-icons/ri";
import { BsBook } from 'react-icons/bs';
import { useColors } from '../../hooks/useColors';
import { useContext, useEffect, useRef, useState } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import clsx from 'clsx';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { IoIosArrowDown, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
    console.log("render: topbar")
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const colorMode = useContext(ColorModeContext);
    const [selected, setSelected] = useState("Home");
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1030);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/signin");
    };
    const handleRegisterClick = () => {
        navigate("/register");
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1030);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);
    return (
        <>
            {/* <LoginForm
                show={isShowModalLogin}
                handleClose={handleShowModalAddUser} /> */}
            <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                    backgroundColor: colors.browYellow[200],
                    padding: "0rem 1.4rem",
                    position: "fixed",
                    top: 0,
                    left: "0",
                    right: "0",
                    zIndex: 1,
                    height: "4.6rem",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box margin={"auto 0"}>
                    <Link to="/" className={styles.global__link__fandom}>
                        <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" alt="" className={styles.global__link__fandom_img} />
                    </Link>
                </Box>
                <Box>
                    {isMobileView && (
                        <Box>
                            <div className={styles.item__hamburger__contain}>
                                <button className={styles.btn__hamburger__detail} onClick={toggleMenu}>
                                    <GiHamburgerMenu />
                                </button>
                            </div>
                        </Box>
                    )}
                    <div ref={menuRef}
                        className={clsx(styles.contain__right_items, (showMenu || !isMobileView) ? styles.show__right_item : "")}>

                        <Box >
                            <div className={styles.contain__right_sub_items}>
                                <Box display="flex" sx={{ background: colors.browYellow[200], border: "1px solid" + colors.browYellow[100] }} >
                                    <InputBase sx={{ ml: 2, flex: 1, color: colors.browYellow[100], fontWeight: 500 }} placeholder="Search" className={styles.inut__search__topbar} />
                                    <IconButton type="button">
                                        <SearchIcon sx={{ fontSize: "2.2rem", color: colors.browYellow[100] }} />
                                    </IconButton>
                                </Box>
                                <IconButton onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === "dark" ? (
                                        <LightModeOutlinedIcon className={styles.icon__btn_topbar} sx={{ color: colors.browYellow[100], }} />
                                    ) : (
                                        <DarkModeOutlinedIcon sx={{ color: theme.palette.text.primary }} className={styles.icon__btn_topbar} />
                                    )}
                                </IconButton>
                                <Box display={"flex"} alignItems={"center"}>
                                    <IconButton>
                                        <NotificationsOutlinedIcon className={styles.icon__btn_topbar} sx={{ color: colors.browYellow[100], }} />
                                    </IconButton>
                                    <div className={styles.contain__btn_auth} style={{ width: "100%" }}>
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
                                    </div>
                                </Box>
                            </div>
                        </Box>
                    </div>
                </Box>

            </Box>
        </>
    );
}

export default Topbar;