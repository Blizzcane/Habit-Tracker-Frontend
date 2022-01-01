import Head from "next/head";   
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) { 
  return (
    <div  >
      <Head>
        <title>Habit Tracker</title>
        <meta name="keywords" content="habit, tracking, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    

      <h1>Welcome</h1>
      <ArticleList articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}