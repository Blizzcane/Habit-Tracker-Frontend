import Link from "next/link";
import Form from "../../components/Form";
import styles from "../../styles/[id].module.css";

export default function EditHabit() {
  return (
    <div className={styles.body}>
      <div className={styles.spaced}>
        <h2 className={styles.title}>Edit Habit</h2>{" "}
        <div className={styles.goBack}>
          <Link href={"/"}>Back</Link>
        </div>
      </div>
      <Form />
    </div>
  );
}
