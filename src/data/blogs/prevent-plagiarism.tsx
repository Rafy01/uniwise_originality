import { BlogCard } from "./BlogCard";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";
import { Helmet } from "react-helmet-async";

export const preventPlagiarism: BlogCard & {
  date?: string;
  content?: React.ReactNode;
} = {
  title: "How to Avoid Plagiarism - And Help Students Do the Same",
  excerpt:
    "Five actionable ways educators can prevent plagiarism before it happens - and support student learning at the same time.",
  cta: {
    label: "Read blog",
    href: "/blog/how-to-avoid-plagiarism",
  },
  date: "2025-05-26",
  imageUrl: "/dos-and-donts.webp",
  content: (
    <>
      <Helmet>
        <title>UNIwise | Blog</title>
        <meta
          name="description"
          content="Discover practical strategies to help students avoid plagiarism. From source citation to AI tools – support ethical writing in higher education."
        />
        <meta
          name="keywords"
          content="how to avoid plagiarism, avoid academic misconduct, plagiarism tips for students, academic integrity, source citation guide, student writing ethics, plagiarism prevention, higher education writing support, AI plagiarism detection, Originality UNIwise, ethical academic writing"
        />
      </Helmet>
      <Typography variant="body">
        Plagiarism doesn't always come from bad intentions. Sometimes it's
        confusion, stress - or not knowing the rules. As educators, our job is
        not just to detect misconduct, but to guide students toward academic
        integrity.
      </Typography>

      <Typography variant="body">
        Here are five practical ways to prevent plagiarism before it happens.
      </Typography>

      <Typography variant="h2">1. Make expectations crystal clear</Typography>
      <Typography variant="body">
        Many cases of plagiarism stem from uncertainty. Are students allowed to
        paraphrase? How should they cite a source? Set clear rules from the
        start - ideally with examples, handouts or a checklist. Don't assume
        prior knowledge.
      </Typography>
      <Typography variant="body">
        ✅ <strong>Pro tip:</strong> Include a short “Dos and Don'ts” guide in
        your assignment brief.
      </Typography>

      <figure
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <img
          src="/dos-and-donts.webp"
          alt='Illustration showing "DOs" (Cite sources) and "DON’Ts" (Copy text)'
          style={{ width: "50%", height: "auto", borderRadius: "5px" }}
        />
      </figure>

      <Typography variant="h2">
        2. Teach citation as a skill, not a punishment
      </Typography>
      <Typography variant="body">
        Referencing can be overwhelming - especially across languages and
        formats. But proper citation is a skill, not just a rule. Show students
        how to reference in APA/MLA style. Use citation generators. Make it part
        of the learning process - not just a grading criterion.
      </Typography>
      <Typography variant="body">
        ✅ <strong>Pro tip:</strong> Host a short workshop or share a video
        during the course.
      </Typography>

      <Typography variant="h2">
        3. Talk openly about academic integrity
      </Typography>
      <Typography variant="body">
        Don’t wait for a misconduct case to talk about integrity. Integrate it
        into your teaching culture. Discuss why it matters - fairness, trust,
        and learning. Help students see plagiarism as more than “getting
        caught”.
      </Typography>
      <Typography variant="body">
        ✅ <strong>Pro tip:</strong> Use real-life examples (anonymised) to open
        the conversation.
      </Typography>

      <Typography variant="h2">
        4. Use tools that support learning, not just control
      </Typography>
      <Typography variant="body">
        Detection tools are useful - but they should guide, not punish.
        Originality by UNIwise provides instant feedback to students, helps them
        understand writing patterns, and supports you as a teacher.
      </Typography>
      <Typography variant="body">
        ✅ <strong>Pro tip:</strong> Let students see their similarity report
        before final submission - for learning, not fear.
      </Typography>

      <Typography variant="h2">
        5. Focus on process, not just product
      </Typography>
      <Typography variant="body">
        Give students milestones, peer reviews, or small deliverables leading up
        to the final hand-in. This reduces the urge to plagiarise - and gives
        you early insight into their writing journey.
      </Typography>
      <Typography variant="body">
        ✅ <strong>Pro tip:</strong> Use formative checkpoints to track progress
        and offer support.
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
