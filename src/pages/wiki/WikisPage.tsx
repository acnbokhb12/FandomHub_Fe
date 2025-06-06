import { Link, useParams } from "react-router-dom";
import { useColors } from "../../hooks/useColors";
import styles from './styles.module.scss';


const WikisPage = () => {
    const colors = useColors();
    const { slug } = useParams();
    return (
        <>
            {/* <h1 style={{color:colors.grey[200]}}>WikisPage : {slug}</h1>  */}
            <div className={styles.resizable_container}>
                <div className={styles.community_header_wrapper}>
                    <header className={styles.fandom_community_header}>  
                        <Link to="/" className={styles.fandom_community_header__image}>
                            <img src="https://res.cloudinary.com/dkn16ntvy/image/upload/v1749130525/200_esmgrx.png" alt="" />
                        </Link>
                        <div className={styles.fandom_community_header__top_container}>
                            <div className={styles.fandom_community_header__community_name_wrapper}></div>
                            <div className={styles.page_counter}>
                                <span className={styles.page_counter__value}>1,000</span>
                                <span className={styles.page_counter__text}>Articles</span>    
                            </div>
                            <div className=""></div>
                        </div>
                    </header>
                </div>
            </div>

        </>
    )
};
export default WikisPage