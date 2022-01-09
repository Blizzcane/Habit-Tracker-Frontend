import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import styles from "../styles/AddHabit.module.css";
import { API_BASE_URL } from "./index";

export default function addHabit() {
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
    habit_color: "#FF6900",
  });

  

  function handleChange({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }
  //checks habit frequency
  function toggle({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.checked ? false : null,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: formData,
      }),
    };

    console.log("Creating new habit");
    await fetch(`${API_BASE_URL}/habits`, requestOptions);
  }

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>New Habit</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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

          <ColorPicker formData={formData} setFormData={setFormData} />
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
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Sun"
            name="Sun"
            onChange={toggle}
          />
          <label htmlFor="Sun" className={styles.label}>
            Sun
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Mon"
            name="Mon"
            onChange={toggle}
          />
          <label htmlFor="Mon" className={styles.label}>
            Mon
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Tue"
            name="Tue"
            onChange={toggle}
          />
          <label htmlFor="Tue" className={styles.label}>
            Tue
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Wed"
            name="Wed"
            onChange={toggle}
          />
          <label htmlFor="Wed" className={styles.label}>
            Wed
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Thu"
            name="Thu"
            onChange={toggle}
          />
          <label htmlFor="Thu" className={styles.label}>
            Thu
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Fri"
            name="Fri"
            onChange={toggle}
          />
          <label htmlFor="Fri" className={styles.label}>
            Fri
          </label>
          <input
            className={styles.weekDays}
            type="checkbox"
            id="Sat"
            name="Sat"
            onChange={toggle}
          />
          <label htmlFor="Sat" className={styles.label}>
            Sat
          </label>
        </div>
        <button className={styles.create}>Create Habit</button>
      </form>
    </div>
  );
}
