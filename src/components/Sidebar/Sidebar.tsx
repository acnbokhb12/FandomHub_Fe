import { Box, colors, IconButton, Typography } from "@mui/material"; 
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";
import { useColors } from '@/hooks/useColors';
import { useState } from "react";
import { IoPeopleSharp } from "react-icons/io5";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FaHome, FaShippingFast } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBowlingBall, FaTableTennisPaddleBall } from "react-icons/fa6";
import { IoIosBasketball, IoMdHelpCircle } from "react-icons/io"; 

interface ItemProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: (title: string) => void;
}

interface SubMenuItemProps {
    label: string;
    icon?: JSX.Element | null;
    items: ItemProps[];
}

const Item = (props: ItemProps) => {
    const { title, to, icon, selected, setSelected } = props;
    const colors = useColors();

    return (
        <MenuItem
            active={selected === title}
            style={{
                backgroundColor: colors.browYellow[300],
                color: selected === title ? "#66ccbb" : colors.grey[100],
                "--custom-hover-font-color": colors.browYellow[200]
            } as React.CSSProperties}
            onClick={() => setSelected(title)}
            icon={<Box className={styles.item__sideBar}>{icon}</Box>}
            component={<Link to={to} />}
        >
            <Typography variant="h6" className={styles.item__sideBar}>
                {title}
            </Typography>
        </MenuItem>
    );
};

const SubMenuItem = (props: SubMenuItemProps) => {
    const { label, icon, items } = props;
    const colors = useColors();
    return (
        <SubMenu label={label} icon={icon} className={styles.subMenu__sideBar}
            style={{
                color: colors.grey[100],
                "--custom-hover-font-color": colors.grey[800]
            } as React.CSSProperties}
        >
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </SubMenu>
    );
};

const MainSidebar = () => {
    const colors = useColors();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Home");
    return (
        <Box
        >
            <Sidebar collapsed={isCollapsed}
                className={styles.sidebar}
                style={{
                    position: "fixed",
                    backgroundColor: colors.browYellow[300],
                    top: '46px'
                }}
            >
                <Menu className={styles.container__sidebar}>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon sx={{ fontSize: "2.6rem" }} /> : undefined}
                        style={{
                            margin: "10px 0 0px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {
                            !isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h4" >
                                        ADMIN
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon sx={{ fontSize: "2.6rem" }} />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`https://p76234.csb.app/assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roth
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}  >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box >
                        <Item
                            title="Home"
                            to="/"
                            icon={<FaHome />}
                            selected={selected}
                            setSelected={setSelected}

                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <SubMenuItem
                            label="Favorite"
                            icon={<MdOutlineFavorite />}
                            items={
                                [
                                    { title: "Tennis", to: "/tennis", icon: <FaTableTennisPaddleBall />, selected, setSelected },
                                    { title: "Bowling", to: "/bowling", icon: <FaBowlingBall />, selected, setSelected },
                                    { title: "Basketball", to: "/basketball", icon: <IoIosBasketball />, selected, setSelected }

                                ]
                            }

                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<IoPeopleSharp />}
                            selected={selected}
                            setSelected={setSelected}


                        />
                        <Item
                            title="Help"
                            to="/help"
                            icon={<IoMdHelpCircle />}
                            selected={selected}
                            setSelected={setSelected}


                        />
                        <Item
                            title="Ship"
                            to="/ship"
                            icon={<FaShippingFast />}
                            selected={selected}
                            setSelected={setSelected}


                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box >
    )
}
export default MainSidebar;