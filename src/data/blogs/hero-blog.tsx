import { BlogCard } from "./BlogCard";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";
import { Helmet } from "react-helmet-async";

export const heroBlog: BlogCard & {
  date?: string;
  content?: React.ReactNode;
} = {
  title: "Why Do Students Plagiarise - and What Can We Do About It?",
  excerpt:
    "Plagiarism isn't always an act of cheating. Some students copy under pressure, " +
    "while others take a calculated shortcut. Our latest white paper reveals the two mindsets " +
    "behind academic misconduct - reactive and proactive - and why each needs a different response. " +
    "Through data and insights from 37 studies, we explore how institutions can shift from detection " +
    "to prevention - and support students before misconduct occurs. " +
    "Originality by UNIwise plays a central role: it's more than a tool - it's a guide for trust, " +
    "learning and fairness.",
  cta: {
    label: "Read more",
    href: "/blog/why-do-students-plagiarise",
  },
  date: "2025-05-28",
  imageUrl: "/confused-student.webp",
  content: (
    <>
      <Helmet>
        <title>UNIwise | Blog</title>
        <meta
          name="description"
          content="Explore the common reasons students plagiarise and how institutions can respond with guidance, support, and effective plagiarism prevention tools."
        />
        <meta
          name="keywords"
          content="why students plagiarise, causes of plagiarism, student plagiarism reasons, academic misconduct, plagiarism prevention, support for students, university plagiarism policy, academic pressure, AI plagiarism detection, Originality UNIwise, academic integrity solutions"
        />
      </Helmet>
      <figure style={{ marginBottom: "2rem" }}>
        <img
          src="/confused-student.png"
          alt="Student stressed over laptop surrounded by warning signs and feedback icons"
          style={{ width: "100%", height: "auto", borderRadius: "5px" }}
        />
      </figure>

      <Typography variant="body">
        Plagiarism isn’t always a malicious act. Sometimes it’s a sign of
        pressure, confusion – or strategic intent. But how do we tell the
        difference, and how do we respond?
      </Typography>

      <Typography variant="body">
        At higher education institutions across Europe, plagiarism remains a
        growing concern. UNIwise’s recent white paper,
        <em>Why Students Turn to Plagiarism</em>, explores this issue through
        new data and insights. The paper doesn’t just ask who plagiarises – but
        why.
      </Typography>

      <Typography variant="body">And that makes all the difference.</Typography>

      <Typography variant="h2">
        Two mindsets, one challenge: Reactive vs Proactive plagiarism
      </Typography>
      <Typography variant="body">
        A meta-analysis of 37 academic studies reveals the five most frequent
        motivations behind deliberate academic misconduct:
      </Typography>

      <ul>
        <li>Poor time management</li>
        <li>Temptation and easy access to answers</li>
        <li>Academic difficulties</li>
        <li>Low perceived risk</li>
        <li>Efficiency gain</li>
      </ul>

      <Typography variant="body">
        These reasons fall into two groups:
      </Typography>
      <ul>
        <li>
          <strong>🟢 Reactive plagiarisers</strong> are overwhelmed – by
          deadlines, workload, or unclear expectations. They plagiarise under
          pressure.
        </li>
        <li>
          <strong>🔴 Proactive plagiarisers</strong> take a calculated risk –
          seeing plagiarism as a shortcut to higher grades with less effort.
        </li>
      </ul>

      <Typography variant="body">
        Understanding this distinction matters. Because each group requires a
        different response.
      </Typography>

      <figure
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <img
          src="/plagiarism-mindsets.webp"
          alt="Comparison between reactive and proactive plagiarisers with mindset traits"
          style={{ width: "70%", height: "auto", borderRadius: "5px" }}
        />
      </figure>

      <Typography variant="h2">
        Technology isn’t enough. Design for trust and learning.
      </Typography>
      <Typography variant="body">
        Originality by UNIwise is more than a detection tool. It’s a fully
        integrated part of the WISEflow assessment platform – offering a
        proactive approach to academic integrity.
      </Typography>

      <ul>
        <li>
          ✅ Automatically checks submissions for text similarity and
          paraphrasing
        </li>
        <li>✅ Shows results directly in the assessment workflow</li>
        <li>✅ Provides guidance to students on source use and citation</li>
        <li>✅ Supports teaching, not just policing</li>
      </ul>

      <Typography variant="body">
        This means institutions can respond early to at-risk students – and send
        a clear signal to those who may be tempted to cheat deliberately.
      </Typography>

      <Typography variant="h2">
        Different problems. Different solutions.
      </Typography>
      <Typography variant="body">
        The white paper highlights that each group must be met where they are:
      </Typography>
      <ul>
        <li>
          • For reactive students, focus on onboarding, study skills, and better
          time planning
        </li>
        <li>
          • For proactive students, increase the visibility of consequences and
          improve detection methods
        </li>
      </ul>

      <Typography variant="body">
        A one-size-fits-all approach simply won’t work. Academic misconduct is
        not only a policy issue – it’s a user experience issue.
      </Typography>

      <Typography variant="h2">
        Integrity isn’t just monitored – it’s built.
      </Typography>
      <Typography variant="body">
        At UNIwise, we believe integrity should be embedded in the learning
        process, not treated as an afterthought. Originality helps institutions
        move from reactive control to proactive support – offering clarity,
        consistency, and confidence.
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
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
        <Button href="/book-demo" variant="secondary">
          Book a Demo
        </Button>
      </div>
    </>
  ),
};
