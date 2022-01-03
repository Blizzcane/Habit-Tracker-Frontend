import Head from "next/head";
import DayDetail from "../components/DayDetail";
import Header from "../components/Header";
import Weekday from "../components/Weekday";

export default function Home({ habits }) {
  return (
    <div>
      <Head>
        <title>Habit Tracker</title>
        <meta name="keywords" content="habit, tracking, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="calendar"> 
        <div className="weekView">
          <Header />
          <Weekday habits={habits}/>
        </div>
        <div className="dayInfo"> 
          <DayDetail />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/habits"
  );
  const habits = await res.json();

  return {
    props: {
      habits ,
    },
  };
};
