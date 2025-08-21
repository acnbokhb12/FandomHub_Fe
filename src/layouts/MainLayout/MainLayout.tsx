import { ThemeProvider } from "@mui/material";
import { ColorModeContext, tokens, useMode } from '@/theme';
import styles from './styles.module.scss';
import MainSidebar from '@/components/Sidebar/Sidebar';
import Topbar from '@/components/Topbar/Topbar';
import { useEffect } from "react";
import Footer from '@/components/Footer/Footer';
import { Outlet, useLocation } from "react-router-dom";
import PageTransitionWrapper from '@/components/PageTransitionWrapper/PageTransitionWrapper';
// import ScrollToTop from "../../components/Scroll/ScrollToTop"; 
// 
const MainLayout = () => {
    const { theme, colorMode } = useMode();
    const location = useLocation();
    const colors = tokens(theme.palette.mode); 
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
                        <div className={styles.right__screen} style={{
                            backgroundColor: colors.grey[800]
                        }}>
                            <Topbar />
                            <div className={styles.contain__pages_detail}>
                                <PageTransitionWrapper>
                                    <Outlet />  
                                </PageTransitionWrapper>
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