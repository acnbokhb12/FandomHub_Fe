import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        const previousPage = sessionStorage.getItem("previousPage");
        if (previousPage) {
            navigate(previousPage);  // Quay lại trang trước đó
        } else {
            navigate("/");  // Quay về trang chủ nếu không có trang trước
        }
    };

    return (
        <>
            <div className={styles.Navigation_nav_btn}>
                <button onClick={handleBack} className={styles.Navigation_back}>
                    <FaArrowLeft className={styles.Navigation_back_icon} /> <span>Back</span>
                </button>
            </div>
            <div className={styles.Navigation_mobileNav}>
                <button onClick={handleBack} className={styles.Navigation_mobileNav_btn}>
                    <IoClose className={styles.Navigation_close_icon} /> 
                </button>
            </div>
        </>
    );
};

export default BackButton;
