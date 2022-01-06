import HabitCard from "./HabitCard";
import styles from "../styles/DayDetail.module.css";
import DayHeader from "./DayHeader";

export default function DayDetail({ dailyHabits , day, setDay }) {
  return (
    <div>
      <DayHeader day={day} setDay={setDay} />
      {dailyHabits.map((habit) => {
        return <HabitCard habit={habit} />;
      })}
    </div>
  );
}
