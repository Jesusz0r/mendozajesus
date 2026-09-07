import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const featuredBooks = [
  {
    id: "agentReliability",
    title: "Agent Reliability Engineering",
    cover: "/books/agent-reliability-engineering.jpg",
    url: "https://2062040984259.gumroad.com/l/cjmipd",
  },
  {
    id: "aiNative",
    title: "The AI-Native Software Engineer",
    cover: "/books/ai-native-software-engineer.jpg",
    url: "https://2062040984259.gumroad.com/l/bauwrd",
  },
  {
    id: "inferenceEconomics",
    title: "AI Inference Economics",
    cover: "/books/ai-inference-economics.jpg",
    url: "https://2062040984259.gumroad.com/l/osovel",
  },
  {
    id: "forwardDeployed",
    title: "Forward Deployed Engineering",
    cover: "/books/forward-deployed-engineering.jpg",
    url: "https://2062040984259.gumroad.com/l/osjpcm",
  },
  {
    id: "appliedAi",
    title: "Applied AI Software Engineer",
    cover: "/books/applied-ai-software-engineer.jpg",
    url: "https://2062040984259.gumroad.com/l/mtpyt",
  },
  {
    id: "agentLoop",
    title: "The Agent Loop",
    cover: "/books/the-agent-loop.jpg",
    url: "https://2062040984259.gumroad.com/l/nhefua",
  },
];

const Bookshelf = () => {
  const { t } = useTranslation();
  return (
    <section id="books" aria-labelledby="books-title" className="books-section">
      <div className="section">
        <header className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow">{t("books.eyebrow")}</p>
            <h2 id="books-title">
              {t("books.title")} <span>{t("books.titleHighlight")}</span>
            </h2>
          </div>
          <p>{t("books.intro")}</p>
        </header>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <article key={book.id}>
              <a
                className="book-link"
                href={book.url}
                target="_blank"
                rel="noreferrer"
                aria-label={t("books.visit", { title: book.title })}
              >
                <div className="book-cover">
                  <img
                    src={book.cover}
                    alt={t("books.coverAlt", { title: book.title })}
                    loading="lazy"
                    decoding="async"
                    width="500"
                    height="800"
                  />
                </div>
                <div className="book-details">
                  <p className="eyebrow">
                    {t(`books.items.${book.id}.discipline`)}
                  </p>
                  <h3>{book.title}</h3>
                  <p>{t(`books.items.${book.id}.description`)}</p>
                  <span className="book-meta">
                    {t(`books.items.${book.id}.meta`)}
                  </span>
                  <span className="book-action">
                    {t("books.read")} <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Bookshelf;
