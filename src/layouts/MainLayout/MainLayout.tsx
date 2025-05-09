import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import styles from './styles.module.scss';
import MainSidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
// import from '.../styles/varialble.scss';
// 
const MainLayout = () => {
    const { theme, colorMode } = useMode();
     
    return (
        <>
           <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className={styles.app__container}>
                        <div className={styles.left__screen}>
                            <MainSidebar/>
                        </div>
                        <div className={styles.right__screen}>
                            <Topbar/>
                            <Outlet />  {/* Đây là chỗ các route con sẽ render */}                          
                            <Footer/>
                        </div>
                    </div>
                </ThemeProvider>
           </ColorModeContext.Provider>
        </>
    )
}
export default MainLayout;