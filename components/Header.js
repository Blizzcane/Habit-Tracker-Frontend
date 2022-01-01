import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Habit</span> Tracker
          </h1> 
          <p className={headerStyles.description}>keep up to date</p>
    </div>
  );
}
