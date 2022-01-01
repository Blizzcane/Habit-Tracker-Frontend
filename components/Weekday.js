import styles from "../styles/Weekday.module.css";

export default function Weekday() {
  return (
    // <header className={styles.weekdayGrid}>
    //   <div className={styles.day}>Sun</div>
    //   <div className={styles.day}>Mon</div>
    //   <div className={styles.day}>Tue</div>
    //   <div className={styles.day}>Wed</div>
    //   <div className={styles.day}>Thu</div>
    //   <div className={styles.day}>Fri</div>
    //   <div className={styles.day}>Sat</div>
    // </header>
    <table> 
      <tr>
        <td></td>
        <th scope="col">Mon</th>
        <th scope="col">Tue</th>
        <th scope="col">Wed</th>
        <th scope="col">Thu</th>
        <th scope="col">Fri</th>
      </tr>
      <tr>
      <th scope="row">Habit name</th>
        <td>Closed</td>
        <td>Open</td>
        <td>Open</td>
        <td>Closed</td>
        <td>Closed</td>
      </tr>
      <tr>
        <th scope="row">Habit name</th>
        <td>Open</td>
        <td>Open</td>
        <td>Closed</td>
        <td>Closed</td>
        <td>Closed</td>
      </tr> 
    </table>
  );
}
