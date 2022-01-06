import styles from "../styles/HabitCard.module.css";

export default function HabitCard({ habit, day }) {
  day = day.slice(0, 3);

  const completedCard = {
    borderRadius: "10px",
    background: `#${habit.habit_color}`,
    margin: "10px",
  };
  const inCompletedCard = {
    borderRadius: "4px",
    background: `#FFF`,
    margin: "10px",
    borderLeft: `3px solid #${habit.habit_color}`,
  };

  const markCompleteBtn = () => {
    return <button>Mark Complete</button>;
  };

  const completedUI = () => {
    return (
      <div className={styles.spaced }>
        <p>Complete</p>
        <button>Undo</button>
      </div>
    );
  };

  return (
    <div
      className={styles.card}
      style={habit[day] ? completedCard : inCompletedCard}
    >
      <div className={styles.spaced}>
        <h4 className={styles.title}>{habit.habit_name}</h4>{" "}
        <button>...</button>
      </div>
      {habit[day] ? completedUI() : markCompleteBtn()}
    </div>
  );
}
