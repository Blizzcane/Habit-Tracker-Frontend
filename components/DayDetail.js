import HabitCard from "./HabitCard";
import styles from "../styles/DayDetail.module.css";
import DayHeader from "./DayHeader";

export default function DayDetail({
  getDailyRoutine,
  dailyHabits,
  day,
  setDay,
}) {
  return (
    <div>
      <DayHeader day={day} setDay={setDay} />
      {dailyHabits.map((habit) => {
        return (
          <HabitCard
            getDailyRoutine={getDailyRoutine}
            key={habit.habit_id}
            habit={habit}
            day={day}
          />
        );
      })}
    </div>
  );
}
