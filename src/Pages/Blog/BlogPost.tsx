import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogs";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Typography } from "@/components/Typography/Typography";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug as keyof typeof blogPosts];

  const notFound = !post || !post.content;

  return (
    <>
      <Helmet>
        <title>
          {notFound ? "404 - Not Found" : `${post.title} - Originality`}
        </title>
        <meta name="description" content={notFound ? "" : post.excerpt || ""} />
      </Helmet>

      <Header onCtaClick={() => alert("Demo requested!")} />
      <Breadcrumbs />

      <main className="blog-post-wrapper" id="main-content">
        {notFound ? (
          <section className="text-center">
            <Typography variant="h1">404 - Blog not found</Typography>
            <Typography variant="body">
              We couldn't find the blog post you're looking for.
            </Typography>
          </section>
        ) : (
          <>
            <Typography variant="h1">{post.title}</Typography>
            {post.date && (
              <Typography variant="body"  className="blog-post-date">
                {post.date}
              </Typography>
            )}

            <section className="blog-content">{post.content}</section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
