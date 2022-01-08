import styles from "../styles/AddHabit.module.css";

export default function addHabit() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <form className={styles.form}>
        <div>
          <input className={styles.inputs} type="text"></input>
          <input className={styles.inputs} type="color"></input>
        </div>
      </form>
    </div>
  );
}
