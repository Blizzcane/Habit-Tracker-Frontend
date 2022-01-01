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
          <div className="calendar">
            <Header />
            <Weekday />
          </div> 
          <div className="dayInfo">
            {children}
          </div>
          
          
        </main>
      </div>
    </>
  );
}
