import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import DayDetail from "../components/DayDetail";
import Header from "../components/Header";
import Weekday from "../components/Weekday";

export const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

// console.log("base:",API_BASE_URL);

export default function Home({ habits }) {
  const [day, setDay] = useState("Sunday");
  const [dailyHabits, setDailyHabits] = useState([]);

  //fetches data for day view in DayDetail.js
  const getDailyRoutine = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/habits/${day.slice(0, 3)}`);
      const habits = await res.json();
      setDailyHabits(habits.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //used to switch between days.
  useEffect(() => {
    const abortController = new AbortController();

    getDailyRoutine();

    return () => abortController.abort();
  }, [day]);

  return (
    <div>
      <Head>
        <title>Habit Tracker</title>
        <meta name="keywords" content="habit, tracking, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="calendar">
        <div
          style={{ overflowY: "scroll", height: "100vh" }}
          className="weekView"
        >
          <Header />
          <Link href="/addHabit">
            <a className="addHabit" id="add-habit">
              &#43; Add Habit
            </a>
          </Link>
          <Weekday habits={habits} />
        </div>
        <div
          style={{ overflowY: "scroll", height: "100vh" }}
          className="dayInfo"
        >
          <DayDetail
            getDailyRoutine={getDailyRoutine}
            day={day}
            setDay={setDay}
            dailyHabits={dailyHabits}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_BASE_URL}/habits`);
  const habits = await res.json();

  return {
    props: {
      habits,
    },
  };
};
