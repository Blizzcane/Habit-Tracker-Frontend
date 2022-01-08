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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { id: habit.habit_id, day: day, status: !habit[day] },
      }),
    };
    console.log("sending:", requestOptions);
    await fetch(`${API_BASE_URL}/habits/${day}`, requestOptions);
  };

  const completedCard = {
    borderRadius: "10px",
    background: `#${habit.habit_color}`,
    margin: "10px",
    color: "white",
    padding: "0px 5px"
  };
  const inCompletedCard = {
    borderRadius: "4px",
    background: `#FFF`,
    margin: "10px",
    borderLeft: `3px solid #${habit.habit_color}`,
    
  };

  const markCompleteBtn = () => {
    return <p className={styles.btn}  onClick={updateHabit}>Mark Complete</p>;
  };

  const completedUI = () => {
    return (
      <div className={styles.spaced}>
        <p>&#10003; Completed</p>
        <p className={styles.btn} onClick={updateHabit}>Undo</p>
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
