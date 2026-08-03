import { BookOpen, PenLine } from "lucide-react";
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

const formatNumber = (number) => String(number).padStart(2, "0");
const formatIndex = (index) => formatNumber(index + 1);

const Bookshelf = () => {
  const { t } = useTranslation();

  return (
    <section
      id="books"
      aria-labelledby="books-title"
      className="relative overflow-hidden bg-secondary text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 noise opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-24 h-[32rem] w-[32rem] rounded-full border border-muted-foreground/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full border border-accent/10"
      />

      <div className="container relative z-10 mx-auto max-w-[1320px] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <header className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              <span className="inline-flex items-center gap-2">
                <PenLine size={15} strokeWidth={1.8} aria-hidden="true" />
                {t("books.eyebrow")}
              </span>
              <span className="h-px w-10 bg-accent/50" />
              <span>{formatNumber(featuredBooks.length)}</span>
            </div>
            <h2
              id="books-title"
              className="max-w-4xl font-sans text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl"
            >
              {t("books.title")}{" "}
              <span className="text-muted-foreground">{t("books.titleHighlight")}</span>
            </h2>
          </div>

          <div className="border-l-2 border-accent pl-5 lg:mb-1">
            <p className="font-serif text-lg leading-relaxed text-muted-foreground">
              {t("books.intro")}
            </p>
            <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              {t("books.collectionNote")}
            </p>
          </div>
        </header>

        <div className="mb-8 mt-16 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-accent" />
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground">
              {t("books.featuredLabel")}
            </h3>
          </div>
          <span className="border border-border bg-background px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {t("books.featuredCount", { count: featuredBooks.length })}
          </span>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book, index) => (
            <article key={book.id} className="group min-w-0">
              <a
                href={book.url}
                target="_blank"
                rel="noreferrer"
                aria-label={t("books.visit", { title: book.title })}
                className="relative block overflow-hidden border border-border bg-background p-2 shadow-[12px_12px_0_rgba(255,75,47,0.1)] transition-shadow duration-300 hover:shadow-[16px_16px_0_rgba(255,75,47,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none"
              >
                <div className="relative aspect-[5/8] overflow-hidden bg-muted">
                  <img
                    src={book.cover}
                    alt={t("books.coverAlt", { title: book.title })}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 border border-border bg-background/90 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-foreground backdrop-blur-sm">
                    {formatIndex(index)}
                  </span>
                </div>
              </a>

              <div className="mt-6 border-t border-border pt-5">
                <div className="mb-2 flex items-center justify-between gap-4 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="text-accent">{t(`books.items.${book.id}.discipline`)}</span>
                  <BookOpen size={15} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl leading-[1.02] tracking-[-0.02em] text-foreground">
                  {book.title}
                </h3>
                <p className="mt-3 max-w-sm font-serif leading-relaxed text-muted-foreground">
                  {t(`books.items.${book.id}.description`)}
                </p>
                <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-foreground">
                  {t(`books.items.${book.id}.meta`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
