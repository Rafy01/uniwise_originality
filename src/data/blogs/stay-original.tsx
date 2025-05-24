import { BlogCard } from "./BlogCard";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";

export const stayOriginal: BlogCard & {
  date?: string;
  content?: React.ReactNode;
} = {
  title: "5 Ways to Avoid Plagiarism – A Student Guide",
  excerpt:
    "Plagiarism often happens by accident. These five student-friendly tips help avoid it through better habits and smarter planning.",
  cta: {
    label: "Read more",
    href: "/blog/5-ways-to-avoid-plagiarism",
  },
  date: "2025-05-27",
  content: (
    <>
      <Typography variant="body">
        Plagiarism isn’t always about cheating. Often, it comes from stress,
        confusion, or not knowing the rules. The good news? It’s easy to avoid –
        when you know how.
      </Typography>

      <Typography variant="body">
        Here are five simple ways to stay original and protect your academic
        integrity.
      </Typography>

      <Typography variant="h2">
        1. Understand what plagiarism actually is
      </Typography>
      <Typography variant="body">
        Copy-pasting is obvious. But did you know paraphrasing without citing is
        also plagiarism? Even reusing your own work (called self-plagiarism) can
        be a problem.
      </Typography>
      <Typography variant="body">
        ✅ <strong>If you’re unsure</strong> – ask your lecturer or check your
        university’s policy.
      </Typography>

      <figure
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <img
          src="/5ways-plagiarism.png"
          alt="Illustration: 5 ways to avoid plagiarism – Start early, Do your research, Cite your sources, Think independently, Paraphrase & quote"
          style={{ width: "70%", height: "auto", borderRadius: "5px" }}
        />
      </figure>

      <Typography variant="h2">2. Take notes in your own words</Typography>
      <Typography variant="body">
        When you read, don’t just copy chunks of text. Rewrite ideas in your own
        words. This helps you understand the material – and makes writing your
        assignment much easier.
      </Typography>
      <Typography variant="body">
        ✅ Use bullet points or voice memos to summarise reading material.
      </Typography>

      <Typography variant="h2">3. Keep track of your sources</Typography>
      <Typography variant="body">
        Losing track of where a quote or idea came from is the fastest way to
        plagiarise by accident. Start a source list early. Tools like Zotero,
        Mendeley or even Google Docs can help.
      </Typography>
      <Typography variant="body">
        ✅ Include author, title, year, and a link or page number every time you
        take a note.
      </Typography>

      <Typography variant="h2">4. Learn how to cite correctly</Typography>
      <Typography variant="body">
        Citations matter. Use the style your school requires – like APA or MLA –
        and be consistent. Citation generators (like Scribbr or EasyBib) can
        save you time, but double-check them.
      </Typography>
      <Typography variant="body">
        ✅ Don’t just cite direct quotes – paraphrased ideas need referencing
        too.
      </Typography>

      <Typography variant="h2">
        5. Start early – don’t rush your writing
      </Typography>
      <Typography variant="body">
        Most unintentional plagiarism happens when you’re short on time. Leaving
        research, writing, and editing until the last minute increases the risk
        of mistakes.
      </Typography>
      <Typography variant="body">
        ✅ Break assignments into small steps and plan ahead with deadlines in
        your calendar.
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
