import styles from '../styles/HabitCard.module.css';

export default function HabitCard({habit}) {
    return (
        <div className={styles.card}>
            <h4 className={styles.title}>{habit.habit_name}</h4>
            <p>Completed</p>
        </div>
    )
}
