import articleStyles from "../styles/Article.module.css";

export default function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => {
        return <h3>{article.title}</h3>;
      })}
    </div>
  );
}
