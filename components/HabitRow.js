import styles from "../styles/HabitRow.module.css";

export default function HabitRow({ day, habit }) {
  return (
    <tr>
      <th scope="row">Habit name</th>
      <td>Closed</td>
      <td>Open</td>
      <td>Open</td>
      <td>Closed</td>
      <td>Closed</td>
      <td>total</td>
    </tr>
  );
}
