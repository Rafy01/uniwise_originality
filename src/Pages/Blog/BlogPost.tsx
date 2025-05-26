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
  const fullUrl = `${window.location.origin}/blog/${slug}`;


  return (
    <>
      <Helmet>
        <title>
          {notFound ? "404 - Not Found" : `${post.title} - Originality`}
        </title>
        <meta name="description" content={notFound ? "" : post.excerpt || ""} />
      </Helmet>

      <Helmet>
        {/* SEO */}
        <title>{post.title} | UNIwise Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags?.join(", ") || ""} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.imageUrl} />
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
              <Typography variant="body" className="blog-post-date">
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
