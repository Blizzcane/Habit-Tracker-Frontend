import Link from "next/link";
import Form from "../components/Form";
import styles from "../styles/AddHabit.module.css";

export default function addHabit() {
  return (
    <div className={styles.body}>
      <div className={styles.spaced}>
        <h2 className={styles.title}>New Habit</h2>{" "}
        <div className={styles.goBack}>
          <Link  href={"/"}>
            Back
          </Link>
        </div>
      </div>

      <Form />
    </div>
  );
}
