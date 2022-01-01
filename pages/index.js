import Head from "next/head";
import Header from "../components/Header";
import Weekday from "../components/Weekday";

export default function Home({ articles }) {
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
          <Weekday />
        </div>
        <div className="dayInfo">
          <h1>Welcome</h1>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
