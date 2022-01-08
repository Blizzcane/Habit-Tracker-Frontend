import styles from "../styles/AddHabit.module.css";

export default function addHabit() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <label for="name">Name this habit</label>
          <label for="color">Color</label>
        </div>
        <div className={styles.formDiv}>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.inputs}
            type="text"
          ></input>

          <input
            id="color"
            name="color" 
            type="color"
          ></input>
        </div>
        <label for="frequency">Habit frequency</label>
        <div name="frequency" className={styles.formDiv}>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="sun"
            class="weekday"
          />
          <label for="sun" className={styles.label}>
            Sun
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="mon"
            class="weekday"
          />
          <label for="mon" className={styles.label}>
            Mon
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="tue"
            class="weekday"
          />
          <label for="tue" className={styles.label}>
            Tue
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="wed"
            class="weekday"
          />
          <label for="wed" className={styles.label}>
            Wed
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="thu"
            class="weekday"
          />
          <label for="thu" className={styles.label}>
            Thu
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="fri"
            class="weekday"
          />
          <label for="fri" className={styles.label}>
            Fri
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="sat"
            class="weekday"
          />
          <label for="sat" className={styles.label}>
            Sat
          </label>
        </div>
        <button className={styles.create}>Create Habit</button>
      </form>
    </div>
  );
}
