import { useEffect, useState } from "react";
import styles from "../styles/DayHeader.module.css";

export default function DayHeader({ day, setDay }) {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setDay(getDay(date));
  }, [date]);

  const tomorrow = () => {
    if (date + 1 !== 7) {
      setDate(date + 1);
    }
  };

  const yesterday = () => {
    if (date - 1 !== -1) {
      setDate(date - 1);
    }
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
    <div className={styles.container}>
      <h3 className={styles.day}>{day}</h3>
      <div className={styles.arrowContainer}>
        <button className={styles.arrowBtn} onClick={yesterday}>
          {" "}
          &#171;{" "}
        </button>

        <button className={styles.arrowBtn} onClick={tomorrow}>
          {" "}
          &#187;{" "}
        </button>
      </div>
    </div>
  );
}
