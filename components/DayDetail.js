import HabitCard from "./HabitCard";
import styles from "../styles/DayDetail.module.css";

 

export default function DayDetail({habits}) {
    return (
        <div>
            <h3 className={styles.day} >Day of the week</h3>
            <HabitCard />
        </div>
    )
}
