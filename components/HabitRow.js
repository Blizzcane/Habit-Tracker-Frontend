import styles from "../styles/HabitRow.module.css";

//this component will return a row for the weekly calendar for a habit
export default function HabitRow({ day, habit }) {
 
  const isComplete = (day) => {
    if (day) {
      return completeColor(habit.habit_color);
    } else {
      return incompleteColor(habit.habit_color);
    }
  };

  const completeColor = (hexCode) => {
    return {
      background: `#${hexCode}`,
      width: "30px",
      height: "30px",
      borderRadius: "5px",
    };
  };

  const incompleteColor = (hexCode) => {
    return {
      background: `#${hexCode}`,
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
