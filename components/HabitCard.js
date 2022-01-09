import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/HabitCard.module.css";
import { API_BASE_URL } from "../pages/index";

export default function HabitCard({ getDailyRoutine, habit, day }) {
  day = day.slice(0, 3);
  const router = useRouter();

  const updateHabit = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { id: habit.habit_id, day: day, status: !habit[day] },
      }),
    };
    console.log("sending:", requestOptions);
    await fetch(`${API_BASE_URL}/habits/${day}`, requestOptions);
    getDailyRoutine();
    router.push("/");
  };

  const completedCard = {
    borderRadius: "10px",
    background: `${habit.habit_color}`,
    margin: "10px",
    color: "white",
  };
  const inCompletedCard = {
    borderRadius: "4px",
    background: `#FFF`,
    margin: "10px",
    borderLeft: `5px solid ${habit.habit_color}`,
  };

  const markCompleteBtn = () => {
    return (
      <p className={styles.btn} onClick={updateHabit}>
        Mark Complete
      </p>
    );
  };

  const completedUI = () => {
    return (
      <div className={styles.spacedBottom}>
        <p>&#10003; Completed</p>
        <p className={styles.btn} onClick={updateHabit}>
          Undo
        </p>
      </div>
    );
  };

  const deleteHabit = () => {
    let confirmed = confirm(
      `Are you sure you want to delete ${habit.habit_name}?`
    );
    if (confirmed) {
      console.log("fetching");
      fetch(`${API_BASE_URL}/habits/${habit.habit_id}`, {
        method: "DELETE",
      })
        .then(() => router.push("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      className={styles.card}
      style={habit[day] ? completedCard : inCompletedCard}
    >
      <div className={styles.spaced}>
        <h4 className={styles.title}>{habit.habit_name}</h4>

        <div className={styles.dropdown}>
          <div className="test"></div>
          <div className={styles.dropdownContent}>
            <Link href={`/habits/${habit.habit_id}`}>
              <a>Edit</a>
            </Link>
            <a onClick={deleteHabit}>Delete</a>
          </div>
        </div>
      </div>
      {habit[day] ? completedUI() : markCompleteBtn()}
    </div>
  );
}
