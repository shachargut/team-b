import styles from './style.module.css'
import { BsColumnsGap } from "react-icons/bs"


// Creator : Team F - Asael

function DashboardBtn() {
        
        return(
        <div>
                <button  type="button" className={`${styles.frame14}`} >
                <BsColumnsGap />
                Dashboard
                </button>
        </div>)
};

export default DashboardBtn