import { BlogCard } from "./BlogCard";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";
import { Helmet } from "react-helmet-async";

export const helpStudents: BlogCard & {
  date?: string;
  content?: React.ReactNode;
} = {
  title: "Spot Plagiarism Before It Happens – Support Students Proactively",
  excerpt:
    "If you could identify misconduct early – and support better writing habits – would you?",
  cta: {
    label: "Read more",
    href: "/blog/help-students-before-they-plagiarise",
  },
  date: "2025-05-25",
  imageUrl: "/plagiarism-mindsets.webp",
  content: (
    <>
      <Helmet>
        <title>UNIwise | Blog</title>
        <meta
          name="description"
          content="Support academic integrity by guiding students before they plagiarise. Learn how proactive education and AI tools can prevent misconduct early."
        />
        <meta
          name="keywords"
          content="prevent plagiarism, student plagiarism support, academic integrity, AI plagiarism tools, proactive plagiarism prevention, plagiarism education, university plagiarism policy, plagiarism awareness, digital assessment, Originality UNIwise, student writing guidance"
        />
      </Helmet>
      <figure style={{ marginBottom: "2rem" }}>
        <img
          src="/help-students.webp"
          alt="Teacher guiding a worried student on a laptop to prevent plagiarism"
          style={{ width: "100%", height: "auto", borderRadius: "4px" }}
        />
      </figure>

      <Typography variant="body">
        What if you could identify academic misconduct before it occurs – and at
        the same time support your students in becoming better writers?
      </Typography>

      <Typography variant="body">
        As an educator, you’re not just responsible for grading. You’re shaping
        learning. And that means guiding students toward academic integrity –
        not catching them after they fall.
      </Typography>

      <Typography variant="h2">
        Picture this: a last-minute submission with hidden risks
      </Typography>
      <Typography variant="body">
        A student submits an assignment minutes before the deadline. You wonder
        if it’s their own work – but there’s no time or context to be sure. They
        may be stressed. Or just taking a chance.
      </Typography>
      <Typography variant="body">
        Now imagine a tool that doesn’t just flag similarity – it identifies
        patterns: paraphrasing, writing shifts, or repeated copying. Patterns
        that show you why the misconduct is happening.
      </Typography>
      <Typography variant="body">
        With that kind of insight, you can support learning rather than
        policing.
      </Typography>

      <figure
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        <img
          src="/plagiarism-mindsets.png"
          alt="Visual comparison of reactive and proactive plagiarisers, showing traits like stress vs. deliberate cheating"
          style={{
            width: "50%",
            height: "auto",
            borderRadius: "5px",
          }}
        />
      </figure>

      <Typography variant="h2">
        Evidence from 37 studies – and a smarter solution
      </Typography>
      <ul>
        <li>Detect paraphrasing, similarity, and unusual writing behaviour</li>
        <li>Provide guidance on citations, not just penalties</li>
        <li>
          Act early – and fairly – from within your existing WISEflow setup
        </li>
      </ul>

      <Typography variant="h2">Teaching with trust starts here</Typography>
      <Typography variant="body">
        Whether you’re giving feedback, mentoring, or assessing – Originality
        helps you lead with trust and transparency.
      </Typography>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        <Button
          as="a"
          href="/pdf/White%20paper%203%20-%20Why%20students%20turn%20to%20plagiarism.pdf"
          variant="primary"
          download
        >
          Read White Paper
        </Button>
        <Button variant="secondary">Book a Demo</Button>
      </div>
    </>
  ),
};
