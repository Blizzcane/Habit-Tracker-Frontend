import Head from "next/head";  
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Habit Tracker</title>
        <meta name="keywords" content="habit, tracking, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   

      <h1>Welcome</h1>
    </div>
  );
}
