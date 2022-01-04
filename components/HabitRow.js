import styles from "../styles/HabitRow.module.css";

//this component will return a row for the weekly calendar for a habit
export default function HabitRow({ day, habit }) {
  const isComplete = (day) => {
    return {
      background: `#${day ? habit.habit_color : "dae4f5"}`,
      width: "30px",
      height: "30px",
      borderRadius: "5px",
    };
  };

  return (
    <tr>
      <th scope="row">{habit.habit_name}</th>
      <td>
        <div style={isComplete(habit.Sun)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Mon)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Tue)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Wed)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Thu)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Fri)}></div>
      </td>
      <td>
        <div style={isComplete(habit.Sat)}></div>
      </td>
      <td>total</td>
    </tr>
  );
}
