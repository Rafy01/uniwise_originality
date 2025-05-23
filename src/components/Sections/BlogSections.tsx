import { Card } from "@/components/Card/Card";
import { blogCards } from "@/data/blogs";

export function BlogSection() {
  return (
    <section className="blog-section container">
      {/* stor “hero” card først */}
      <Card {...blogCards[0]} className="blog-card--hero" />

      {/* de tre små kort */}
      <div className="blog-grid">
        {blogCards.slice(1).map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
