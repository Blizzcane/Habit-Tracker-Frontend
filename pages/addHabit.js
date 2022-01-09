 
import Form from "../components/Form";
import styles from "../styles/AddHabit.module.css"; 

export default function addHabit() {
 

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <Form />
    </div>
  );
}
