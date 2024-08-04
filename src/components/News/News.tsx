import './News.scss';

interface NewsProps {
  newsItems: string[];
}

function News({ newsItems }: NewsProps) {
  return (
    <div className="news">
      <h3>News</h3>
      <ul>
        {newsItems.map((news, index) => (
          <li key={index}>{news}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
