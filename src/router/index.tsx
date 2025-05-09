import { Routes, Route  } from "react-router-dom"
import MainLayout from "../layouts/MainLayout/MainLayout"
import HomePage from "../pages/home/HomePage";
import AuthPage from "../pages/auth/AuthPage";
import AboutPage from "../pages/about/AboutPage";

const AppRouter = () => {
   return(
      <Routes>
         {/* Default layout (for users) */}
         <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
         </Route>
         <Route path="/signin" element={<AuthPage />} />
         <Route path="/register" element={<AuthPage />} />
      </Routes>
   )
};
export default AppRouter;