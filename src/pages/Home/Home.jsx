import { data } from "../../Data/Data";

const Home = () => {
  const { home } = data;

  return (
    <div className='home-container'>
      {home.map((article, index) => {
        return (
          <article className={"article-container-" + index} key={index}>
            <div className='article-img-container'>
              <img src={article.image} alt={index} />
            </div>
            <div className='article-txt-container'>
              <h2>{article.title}</h2>
              <p>{article.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
