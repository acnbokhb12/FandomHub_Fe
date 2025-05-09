import { Box, colors, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from './sidebar.module.scss';
import { Link } from "react-router-dom";
import { useColors } from "../../hooks/useColors";
import { useState } from "react";
import { IoChatbubbleSharp, IoMailSharp, IoPeopleSharp } from "react-icons/io5";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FaBook, FaHome, FaRegStar, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBowlingBall, FaTableTennisPaddleBall } from "react-icons/fa6";
import { IoIosBasketball, IoMdHelpCircle } from "react-icons/io"; 
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
 
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

const Item = (props: ItemProps & { colors: any } ) => {
  const { title, to, icon, selected, setSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

const SubMenuItem = (props: SubMenuItemProps & { colors: any }) => {
  const { label, icon, items } = props; 
  return (
    <SubMenu label={label} icon={icon} className={styles.subMenu__sideBar}
      style={{
        color: colors.grey[100],
        "--custom-hover-font-color": colors.grey[800]
      } as React.CSSProperties}
    >
      {items.map((item, index) => (
        <Item key={index} {...item} colors={colors} />
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
                    top:"6.6rem",
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
                            colors={colors}
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
                            colors={colors}
                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<IoPeopleSharp />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Help"
                            to="/help"
                            icon={<IoMdHelpCircle />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Ship"
                            to="/ship"
                            icon={<FaShippingFast />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Manage Story"
                            to="/story"
                            icon={<FaBook />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Mail"
                            to="/mail"
                            icon={<IoMailSharp />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Central"
                            to="/central"
                            icon={<BsGlobeCentralSouthAsia />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Explore
                        </Typography>
                        <Item
                            title="About"
                            to="/about"
                            icon={<FaRegStar />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Cart"
                            to="/register"
                            icon={<FaShoppingCart />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                        <Item
                            title="Signin"
                            to="/signin"
                            icon={<IoChatbubbleSharp />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}

                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box >
  )
}
export default MainSidebar;