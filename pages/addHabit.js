import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import styles from "../styles/AddHabit.module.css";

export default function addHabit() {
  const [color, setColor] = useState("#FF6900");


  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <label htmlFor="name">Name this habit</label>
          <label htmlFor="color">Color</label>
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

          <input id="color" name="color" type="color"></input>
          <ColorPicker color={color} setColor={setColor} />
        </div>
        <label htmlFor="frequency">Habit frequency</label>
        <div name="frequency" className={styles.formDiv}>
          <input className={styles.weekDays} type="checkbox" id="sun" />
          <label htmlFor="sun" className={styles.label}>
            Sun
          </label>
          <input className={styles.weekDays} type="checkbox" id="mon" />
          <label htmlFor="mon" className={styles.label}>
            Mon
          </label>
          <input className={styles.weekDays} type="checkbox" id="tue" />
          <label htmlFor="tue" className={styles.label}>
            Tue
          </label>
          <input className={styles.weekDays} type="checkbox" id="wed" />
          <label htmlFor="wed" className={styles.label}>
            Wed
          </label>
          <input className={styles.weekDays} type="checkbox" id="thu" />
          <label htmlFor="thu" className={styles.label}>
            Thu
          </label>
          <input className={styles.weekDays} type="checkbox" id="fri" />
          <label htmlFor="fri" className={styles.label}>
            Fri
          </label>
          <input className={styles.weekDays} type="checkbox" id="sat" />
          <label htmlFor="sat" className={styles.label}>
            Sat
          </label>
        </div>
        <button className={styles.create}>Create Habit</button>
      </form>
    </div>
  );
}
