import { useNavigate } from "react-router-dom";

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

    return <button onClick={handleBack}>Back</button>;
};

export default BackButton;
