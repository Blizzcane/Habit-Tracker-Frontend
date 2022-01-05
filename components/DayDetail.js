import HabitCard from "./HabitCard";
import styles from "../styles/DayDetail.module.css";
import DayHeader from "./DayHeader";

 

export default function DayDetail({habits}) {
    return (
        <div>
            <DayHeader />
            <HabitCard />
        </div>
    )
}
