import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import styles from "../styles/AddHabit.module.css";

export default function addHabit() {
  const [color, setColor] = useState("#FF6900");
  const [formData, setFormData] = useState({
    habit_name: "",
    description: "",
    Sun: null,
    Mon: null,
    Tue: null,
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
    habit_color: color,
  });

  function handleChange({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData)
  }

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <label htmlFor="habit_name">Name this habit</label>
          <label htmlFor="color">Color</label>
        </div>
        <div className={styles.formDiv}>
          <input
            value={formData.habit_name}
            type="text"
            id="habit_name"
            name="habit_name"
            required
            className={styles.inputs} 
            onChange={handleChange}
          ></input>

          <ColorPicker color={color} setColor={setColor} />
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="description">Habit description</label>
        </div>
        <div className={styles.formDiv}>
          <textarea
            onChange={handleChange}
            rows="4"
            type="textarea"
            id="description"
            name="description"
            required
            value={formData.description}
            className={styles.inputs}
          ></textarea>
        </div>
        <label htmlFor="frequency">Habit frequency</label>
        <div name="frequency" className={styles.formDiv}>
          <input className={styles.weekDays} type="checkbox" id="Sun" name="Sun" />
          <label htmlFor="Sun" className={styles.label}>
            Sun
          </label>
          <input className={styles.weekDays} type="checkbox" id="Mon" id="Mon" />
          <label htmlFor="Mon" className={styles.label}>
            Mon
          </label>
          <input className={styles.weekDays} type="checkbox" id="Tue" name="Tue" />
          <label htmlFor="Tue" className={styles.label}>
            Tue
          </label>
          <input className={styles.weekDays} type="checkbox" id="Wed" name="Wed" />
          <label htmlFor="Wed" className={styles.label}>
            Wed
          </label>
          <input className={styles.weekDays} type="checkbox" id="Thu" name="Thu" />
          <label htmlFor="Thu" className={styles.label}>
            Thu
          </label>
          <input className={styles.weekDays} type="checkbox" id="Fri" name="Fri" />
          <label htmlFor="Fri" className={styles.label}>
            Fri
          </label>
          <input className={styles.weekDays} type="checkbox" id="Sat" name="Sat" />
          <label htmlFor="Sat" className={styles.label}>
            Sat
          </label>
        </div>
        <button className={styles.create}>Create Habit</button>
      </form>
    </div>
  );
}
