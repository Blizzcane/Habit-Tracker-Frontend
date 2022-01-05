import { useState } from "react";
import styles from "../styles/DayHeader.module.css";

export default function DayHeader() {
  const [day, setDay] = useState("Sunday");
  const [date, setDate] = useState(0);

  const tomorrow = () => {
    if (date + 1 !== 7) {
      setDate(date + 1);
    }
    setDay(getDay(date));
  };
  const yesterday = () => {
    if (date - 1 !== -1) {
      setDate(date - 1);
    }
    setDay(getDay(date));
  };

  const getDay = (val) => {
    switch (val) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  };

  return (
    <div>
      <h3 className={styles.day}>{day}</h3>
      <button onClick={yesterday}> Back </button>

      <button onClick={tomorrow}> Next </button>
    </div>
  );
}
