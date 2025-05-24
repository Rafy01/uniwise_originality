import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogs";
import { Header } from "@/components/Header/Header";
import { NavItem } from "@/components/Header/Header.types";
import { Footer } from "@/components/Footer/Footer";
import "./BlogPost.css";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

const navItems: NavItem[] = [
  { label: "WISEFLOW", href: "#wiseflow" },
  {
    label: "ORIGINALITY",
    href: "#originality",
    subItems: [
      { label: "Features", href: "#features" },
      { label: "Cases", href: "#cases" },
    ],
  },
  { label: "RESOURCES", href: "#resources" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug as keyof typeof blogPosts];

  const notFound = !post || !post.content;

  return (
    <>
      <Helmet>
        <title>
          {notFound ? "404 – Not Found" : `${post.title} – Originality`}
        </title>
        <meta name="description" content={notFound ? "" : post.excerpt || ""} />
      </Helmet>

      <Header navItems={navItems} onCtaClick={() => alert("Demo requested!")} />
      <Breadcrumbs />

      <main className="blog-post-wrapper" id="main-content">
        {notFound ? (
          <section className="text-center">
            <h1>404 – Blog not found</h1>
            <p>We couldn't find the blog post you're looking for.</p>
          </section>
        ) : (
          <>
            <h1>{post.title}</h1>
            {post.date && <span className="blog-post-date">{post.date}</span>}
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
