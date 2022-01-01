import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Weekday from "./Weekday";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {/* this will hold the calender in the layout */}
          <div className="calendar">
            {/* this will show the day in a detailed view */}
            <div className="dayInfo"></div>
          </div>
          <Weekday />
          {children}
        </main>
      </div>
    </>
  );
}
