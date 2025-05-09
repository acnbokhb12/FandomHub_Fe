import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll về top khi pathname đổi
  }, [pathname]);

  return null;
};

export default ScrollToTop;
