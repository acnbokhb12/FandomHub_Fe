import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import styles from './styles.module.scss';
import MainSidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { ReactNode, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
// import from '.../styles/varialble.scss';
// 
const MainLayout = () => {
    const { theme, colorMode } = useMode();
    const location = useLocation();
    useEffect(() => {
        // Lưu trang trước đó vào sessionStorage nếu không phải trang login hoặc register
        if (location.pathname !== "/signin" && location.pathname !== "/register") {
            sessionStorage.setItem("previousPage", location.pathname);
        }
    }, [location]);
    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className={styles.app__container}>
                        <div className={styles.left__screen}>
                            <MainSidebar />
                        </div>
                        <div className={styles.right__screen}>
                            <Topbar />
                            <div className={styles.contain__pages_detail}>
                                <Outlet />  {/* Đây là chỗ các route con sẽ render */}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
export default MainLayout;