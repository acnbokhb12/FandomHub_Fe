import { useParams } from "react-router-dom";
import { useColors } from "../../hooks/useColors";

const  WikisPage = () => {
    const colors = useColors();
    const { slug } = useParams();
    return (
        <>
            <h1 style={{color:colors.grey[200]}}>WikisPage : {slug}</h1>
            <h2>HIHI</h2>
        </>
    )
};
export default WikisPage