import React from 'react';
const articles = [
  {
    title: "Blinkit or Zepto? A Rider Journey in the Q-Commerce Revolution",
    description: "How AI is reshaping the way we build and maintain design systems at scale.",
    date: "1 April 2025",
    readTime: "5 min",
    link: "https://maybeeureka.substack.com/p/blinkit-zepto-case-study"
  }
];
const Articles = () => {
  return (
    <section>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75em' }}>Writing</h2>
      {articles.map((article, index) => (
        <article key={index} style={{ marginBottom: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5em' }}>
            <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0000ee', textDecoration: 'underline', fontWeight: 'bold', flex: 1 }}>
              {article.title}
            </a>
            <span style={{ fontSize: '0.9em', whiteSpace: 'nowrap', marginLeft: '1em' }}>{article.readTime}</span>
          </div>
          <div style={{ marginBottom: '0.5em' }}>{article.description}</div>
          <div style={{ fontSize: '0.95em', color: '#222' }}>{article.date}</div>
        </article>
      ))}
    </section>
  );
};
export default Articles;