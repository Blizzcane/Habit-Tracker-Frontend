import HabitCard from "./HabitCard";
import styles from "../styles/DayDetail.module.css";
import DayHeader from "./DayHeader";

 

export default function DayDetail({habits, day, setDay}) {
    return (
        <div>
            <DayHeader day={day} setDay={setDay} />
            <HabitCard />
        </div>
    )
}
