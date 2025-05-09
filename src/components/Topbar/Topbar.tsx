import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import styles from './styles.module.scss';
import { RiDiscussLine } from "react-icons/ri";
import { BsBook } from 'react-icons/bs';
import { useColors } from '../../hooks/useColors';
import { useContext, useEffect, useRef, useState } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import clsx from 'clsx';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { IoIosArrowDown, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


interface ItemNavProps {
    title: string;
    to?: string | null;
    icon?: JSX.Element | null;
    selected?: string | null;
    setSelected?: (title: string) => void | null;
}

interface SubNavItemProps {
    title: string;
    to?: string | null;
    icon?: JSX.Element | null;
    items?: ItemNavProps[] | null;
    subItems?: SubNavItemProps[] | null;
    selected?: string | null;
    setSelected?: (title: string) => void | null; 
}


const Dropdown = ({ title, to, icon, items, subItems, selected, setSelected, showMenuOpen }: any) => {
    const colors = useColors();
    return (
        <div
            className={styles.contain__item_nav}
            style={{

            }}
        >
            <div>
                <span className={styles.item__nav_to_open_subnav}
                    onClick={() => setSelected && setSelected(title)}
                >
                    {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
                    {to ? <Link
                        to={to}
                        className={styles.item__nav_to_open_subnav_color}
                        style={{
                            color: colors.browYellow[100]
                        }}
                    >
                        {title}
                    </Link> : title}
                    <span className="ms-2">
                        <IoMdArrowDropdown className={styles.arrow_down} />
                        <IoMdArrowDropup className={styles.arrow_up} />
                    </span>
                </span>
            </div>

            {/* Danh sách menu con */}

            <div className={clsx(styles.contain__sub_item_nav_link)}
                style={{
                    backgroundColor: colors.grey[800],
                    "--custom-bg-color": colors.grey[800]
                } as React.CSSProperties}
            >
                <ul className={styles.contain__sub_item_nav_list}>
                    {items?.map((item: any, index: any) => (
                        <li key={index}
                            className={styles.contain__sub_item_nav_items}
                            onClick={() => setSelected && setSelected(item.title)}
                        >
                            <span className=" d-block"  >
                                {item.to ? (
                                    <Link to={item.to} className={styles.span__item__link} style={{ color: colors.grey[100] }}>
                                        {item.icon &&
                                            <span style={{ marginRight: "8px", color: colors.grey[100] }}>
                                                {item.icon}
                                            </span>}
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span className={styles.span__item__link} style={{ color: colors.grey[100] }}> {item.title}</span>
                                )}
                            </span>
                        </li>
                    ))}
                    {subItems?.map((subItem: any, index: any) => (
                        <li
                            key={index}
                            className={clsx(styles.contain__item_subnavParrent, styles.contain__sub_item_nav_items)}
                        >
                            <span className={styles.contain__item_subnavParrent_span}>
                                <span style={{ color: colors.grey[100] }}>
                                    {subItem.icon && <span style={{ paddingRight: "8px" }}>{subItem.icon}</span>}
                                    {subItem.title}
                                </span>
                                <span className="ms-2">
                                    {
                                        showMenuOpen === true ?
                                            <IoIosArrowDown style={{ color: colors.grey[100] }} />
                                            : <IoIosArrowForward style={{ color: colors.grey[100] }} />
                                    }

                                </span>
                            </span>
                            {/* Subitem long nhau 2 lop */}
                            {/* {subItem.items && openChildIndex === index && ( */}
                            <div
                                className={styles.contain__item_subnavParrent_div}
                                style={{
                                    backgroundColor: colors.grey[800],
                                }}
                            >
                                <ul className={styles.contain__item_subnavParrent_ul} >

                                    {subItem.items?.map((subItemChild: any, subIndex: any) => (
                                        <li key={subIndex}
                                            className={styles.contain__sub_item_nav_items}
                                            onClick={() => setSelected && setSelected(subItemChild.title)}
                                        >
                                            {subItemChild.to ? (
                                                <Link to={subItemChild.to}
                                                    className={styles.span__item__link_child}
                                                    style={{
                                                        color: colors.grey[100]
                                                    }}
                                                >
                                                    {subItemChild.title}
                                                </Link>
                                            ) : (
                                                <span>{subItemChild.title}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* ) } */}
                        </li>
                    ))
                    }
                </ul>
            </div>

        </div>
    );
};

const dropDownArr: SubNavItemProps[] = [
    {
        title: "Explore",
        to: "/explore",
        icon: <FaHome />,
        items: [
            { title: "Home", to: "/home", icon: <FaHome />, selected: "", setSelected: () => { } },
            { title: "Discuss", to: "/discuss", icon: <RiDiscussLine />, selected: "", setSelected: () => { } },
            { title: "All Page", to: "/allpage", icon: null, selected: "", setSelected: () => { } },
            { title: "Community", to: "/community", icon: null, selected: "", setSelected: () => { } },
            { title: "Interactive Maps", to: "/interactivemaps", icon: null, selected: "", setSelected: () => { } },
            { title: "Recent Blog Posts", to: "/recentblogs", icon: null, selected: "", setSelected: () => { } },
        ],
        subItems: [],
        selected: "",
        setSelected: () => { }
    },
    {
        title: "Books",
        to: "/books",
        icon: null,
        items: [
            { title: "The Seven Novels", to: "/sev", icon: null, selected: "", setSelected: () => { } },
            { title: "Character", to: "/character", icon: null, selected: "", setSelected: () => { } },
            { title: "Programs", to: "/programs", icon: null, selected: "", setSelected: () => { } },
            { title: "Canon", to: "/canon", icon: null, selected: "", setSelected: () => { } },
        ],
        subItems: [
            {
                title: "Actor",
                icon: null,
                items: [
                    { title: "Daniel Radcliff3", to: "/Daniel_Radcliffe", selected: "", setSelected: () => { } },
                    { title: "Rupert Grint", to: "/Rupert_Grint", selected: "", setSelected: () => { } },
                    { title: "Emma Watson", to: "/Emma_Watson", selected: "", setSelected: () => { } },
                    { title: "Tom Felton", to: "/Tom_Felton", selected: "", setSelected: () => { } },
                    { title: "Ralph Fiennes", to: "/Ralph_Fiennes", selected: "", setSelected: () => { } },
                    { title: "Alan Rickman", to: "/Alan_Rickman", selected: "", setSelected: () => { } },
                    { title: "Maggie Smith", to: "/Maggie_Smith", selected: "", setSelected: () => { } },

                ]

            },
            {
                title: "Directors",
                icon: null,
                items: [
                    { title: "Chris Columbus", to: "/Chris_Columbus", selected: "", setSelected: () => { } },
                    { title: "Mike Newell", to: "/Mike_Newell", selected: "", setSelected: () => { } },
                    { title: "David Yates", to: "/David_Yates", selected: "", setSelected: () => { } },
                ]
            },
            {
                title: "Directors",
                icon: null,
                items: [
                    { title: "Chris Columbus", to: "/Chris_Columbus", selected: "", setSelected: () => { } },
                    { title: "Mike Newell", to: "/Mike_Newell", selected: "", setSelected: () => { } },

                ]

            },
        ],
        selected: "",
        setSelected: () => { }
    },
    {
        title: "Community",
        to: "/community",
        items: [
            { title: "Forums", to: "/forums", icon: null, selected: "", setSelected: () => { } },
            { title: "Policies", to: "/policies", icon: null, selected: "", setSelected: () => { } },
            { title: "Administrators", to: "/administrators", icon: null, selected: "", setSelected: () => { } },
            { title: "Help", to: "/help", icon: null, selected: "", setSelected: () => { } },
            { title: "Sand Box", to: "/sandbox", icon: null, selected: "", setSelected: () => { } },
            { title: "Recent Changes", to: "/recentchanges", icon: null, selected: "", setSelected: () => { } },
        ],
        subItems: [],
        selected: "",
        setSelected: () => { }
    },
]


const Topbar = () => {
    console.log("render: topbar")
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const colorMode = useContext(ColorModeContext);
    const [selected, setSelected] = useState("Home");
    // const [anchorEl, setAnchorEl] = useState(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1030);
    const [showMenu, setShowMenu] = useState(false);
    const [isShowModalLogin, setIsShowModalLogin] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleShowModalAddUser = () => {
        setIsShowModalLogin(false);
    }
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
        const handleClickOutside = (event:any) => {
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
                    padding: "1rem 1.4rem",
                    position: "fixed",
                    top: 0,
                    left: "0",
                    right: "0",
                    zIndex: 1
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
                        <Box padding={"0 1rem"}
                        >
                            <div className={styles.contain__link_by_nav}>
                                {dropDownArr.map((dropdown, index) => (
                                    <Dropdown
                                        key={index}
                                        title={dropdown.title}
                                        to={dropdown.to}
                                        icon={dropdown.icon}
                                        items={dropdown.items}
                                        subItems={dropdown.subItems}
                                        selected={selected}
                                        setSelected={setSelected}
                                        showMenuOpen={showMenu}
                                    />
                                ))}

                            </div>

                        </Box>
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
                                <IconButton>
                                    <NotificationsOutlinedIcon className={styles.icon__btn_topbar} sx={{ color: colors.browYellow[100], }} />
                                </IconButton>
                                <Box display={"flex"} alignItems={"center"}>
                                    <div style={{ width: "100%" }}>
                                        <button
                                            type="button" className={clsx(styles.btn__login)}
                                            onClick={() => setIsShowModalLogin(true)}
                                        >
                                            <FaRegUserCircle style={{
                                                fontSize: "1.8rem",
                                                marginRight: "8px"
                                            }} /> Sign in
                                        </button>
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