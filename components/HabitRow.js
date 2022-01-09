import styles from "../styles/HabitRow.module.css";

//this component will return a row for the weekly calendar for a habit
export default function HabitRow({ day, habit }) {
  const {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    habit_name,
    description,
    habit_color,
  } = habit;

  const isComplete = (day) => {
    if (day !== null) {
      return {
        background: `${day ? habit_color : "#ededed"}`,
        width: "30px",
        height: "30px",
        borderRadius: "5px",
      };
    }
  };

  return (
    <tr>
      <th scope="row">{habit_name}</th>
      <td>
        <div style={isComplete(Sun)}></div>
      </td>
      <td>
        <div style={isComplete(Mon)}></div>
      </td>
      <td>
        <div style={isComplete(Tue)}></div>
      </td>
      <td>
        <div style={isComplete(Wed)}></div>
      </td>
      <td>
        <div style={isComplete(Thu)}></div>
      </td>
      <td>
        <div style={isComplete(Fri)}></div>
      </td>
      <td>
        <div style={isComplete(Sat)}></div>
      </td>
      <td>total</td>
    </tr>
  );
}
