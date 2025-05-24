import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Typography } from "@/components/Typography/Typography";
import "./NotFound.css"; // eller din 404 CSS

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found</title>
        <meta name="description" content="This page could not be found." />
      </Helmet>

      <Header onCtaClick={() => alert("Demo requested!")} />

      <main className="blog-post-wrapper text-center" id="main-content">
        <Typography variant="h1">404 – Page Not Found</Typography>
        <Typography variant="body">
          We couldn’t find the page you’re looking for. It may have been
          removed, renamed, or never existed.
        </Typography>
      </main>

      <Footer />
    </>
  );
}
