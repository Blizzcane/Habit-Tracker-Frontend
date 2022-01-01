import styles from "../styles/HabitRow.module.css";


//this component will return a row for the weekly calendar for a habit
export default function HabitRow({ day, habit }) {
  return (
    <tr>
      <th scope="row">Habit name</th>
      <td>boolean</td>
      <td>boolean</td>
      <td>boolean</td>
      <td>boolean</td>
      <td>boolean</td>
      <td>total</td>
    </tr>   
  );
}
