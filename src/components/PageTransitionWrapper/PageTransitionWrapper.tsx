// PageTransitionWrapper.tsx
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}

    >
      {children}
    </motion.div>
  );
};


export default PageTransitionWrapper;
