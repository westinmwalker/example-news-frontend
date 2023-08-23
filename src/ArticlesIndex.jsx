/* eslint-disable react/prop-types */
export function ArticlesIndex(props) {
  return (
    <div id="articles-index">
      <h1>All articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <h5>{article.author}</h5>
          <h5>{article.description}</h5>
          <h5>{article.content}</h5>
        </div>
      ))}
    </div>
  );
}
