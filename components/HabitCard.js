import styles from "../styles/HabitCard.module.css";
import { API_BASE_URL } from "../pages/index";

export default function HabitCard({ habit, day }) {
  day = day.slice(0, 3);

  //   useEffect(() => {
  //     async function updatePost() {
  //         const requestOptions = {
  //             method: 'PUT',
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
  //         };
  //         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions);
  //         const data = await response.json();
  //         setPostId(data.id);
  //     }

  //     updateHabit();
  // }, []);
  const updateHabit = async () => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        data: { id: habit.habit_id, day: day, status: !habit[day] },
      }),
    };
    console.log("sending:", requestOptions);
    const res = await fetch(`${API_BASE_URL}/habits/${day}`, requestOptions);
    const data = await res.json();
    console.log("data:", data);
  };

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
    return <button onClick={updateHabit}>Mark Complete</button>;
  };

  const completedUI = () => {
    return (
      <div className={styles.spaced}>
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
