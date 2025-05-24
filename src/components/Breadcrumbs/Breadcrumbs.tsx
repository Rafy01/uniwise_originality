import { Link, useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import { Typography } from "@/components/Typography/Typography";
import "./Breadcrumbs.css";

export function Breadcrumbs() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  const items = [
    { label: "Home", to: "/" },
    { label: "Originality", to: "/originality" },
    { label: post?.title || slug?.replace(/-/g, " "), to: null },
  ];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.to ? (
              <Link to={item.to}>
                <Typography variant="link-primary" className="breadcrumb-link">
                  {item.label}
                </Typography>
              </Link>
            ) : (
              <Typography variant="link-primary" className="breadcrumb-current">
                {item.label}
              </Typography>
            )}

            {/* separator – vis kun hvis ikke sidste */}
            {i < items.length - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
