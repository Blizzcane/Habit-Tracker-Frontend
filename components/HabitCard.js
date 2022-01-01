import styles from '../styles/HabitCard.module.css';

export default function HabitCard() {
    return (
        <div className={styles.card}>
            <h4 className={styles.title}>Habit Name</h4>
            <p>Completed</p>
        </div>
    )
}
