import styles from "../styles/Weekday.module.css";
import HabitRow from "./HabitRow";

export default function Weekday({ habits }) {
  return (
    <table>
      <tr>
        <td></td>
        <th scope="col">Sun</th>
        <th scope="col">Mon</th>
        <th scope="col">Tue</th>
        <th scope="col">Wed</th>
        <th scope="col">Thu</th>
        <th scope="col">Fri</th>
        <th scope="col">Sat</th>
      </tr> 
      {habits.data.map((habit) => {
        return <HabitRow habit={habit} /> ;
      })}
    </table>
  );
}
