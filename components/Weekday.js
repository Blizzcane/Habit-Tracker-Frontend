import styles from '../styles/Weekday.module.css'

export default function Weekday() {
  return (
    <div className={styles.weekdayGrid}>
      <div className={styles.day}>Sun</div>
      <div className={styles.day}>Mon</div>
      <div className={styles.day}>Tue</div>
      <div className={styles.day}>Wed</div>
      <div className={styles.day}>Thu</div>
      <div className={styles.day}>Fri</div>
      <div className={styles.day}>Sat</div>
    </div>
  );
}
