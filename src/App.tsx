

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "ChatGPT", url: "https://chat.openai.com/" },
  { title: "Obsidian", url: "https://obsidian.md/" },
  { title: "Perplexity", url: "https://www.perplexity.ai/" },
  { title: "DeepL", url: "https://www.deepl.com"},
  { title: "Overleaf", url: "https://www.overleaf.com/"},
  { title: "Wolfram Mathematica", url: "https://www.wolfram.com/mathematica/" },
  { title: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
  { title: "インターネット回線の速度テスト", url: "https://fast.com"}
];

const blog_links = [
  { title: "Qiita", url: "https://qiita.com/" },
  { title: "Zenn", url: "https://zenn.dev/" },
  { title: "Note", url: "https://note.com/" },
  { title: "Medium", url: "https://medium.com/" },
]

const paper_links = [
  { title: "Journal of Atmospheric Sciences(JAS)", url: "https://journals.ametsoc.org/view/journals/atsc/atsc-overview.xml" },
  { title: "Monthly Weather Review(MWR)", url: "https://journals.ametsoc.org/view/journals/mwre/mwre-overview.xml"},
  { title: "Geophysical Research Letters", url: "https://agupubs.onlinelibrary.wiley.com/journal/19448007"},
  { title: "Journal of Geophysical Research(JGR): Atmospheres", url: "https://agupubs.onlinelibrary.wiley.com/journal/21698996" },
  { title: "Journal of the Meteorological Society of Japan (JMSJ)", url: "https://www.metsoc.jp/jmsj/index.html"},
  { title: "Weather and Forecasting", url: "https://www.ametsoc.org/ams/publications/journals/weather-and-forecasting/"},
  { title: "Quarterly Journal of the Royal Meteorological Society (QJRMS)", url: "https://rmets.onlinelibrary.wiley.com/journal/1477870x"}
]

const paper_search_links = [
  { title: "Google Scholar", url: "https://scholar.google.com/" },
  { title: "arXiv", url: "https://arxiv.org/" },
  { title: "J-STAGE", url: "https://www.jstage.jst.go.jp/browse/-char/ja" },
  { title: "CiNii Articles", url: "https://ci.nii.ac.jp/" }
]

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 リンク集</h1>
      <h2>技術ブログ・webメディア</h2>
      <ul>
        {blog_links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
      <h2>論文雑誌</h2>
      台風・熱帯低気圧に興味のある人が見ると良いであろう論文雑誌のリンク集
      <ul>
        {paper_links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
      <h2>論文検索</h2>
      <ul>
        {paper_search_links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
      <h2>その他</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;