import { BlogCard } from "./BlogCard";

export const helpStudents: BlogCard & {
  content?: string;
  date?: string;
} = {
  title: "Help Students Before They Plagiarise",
  excerpt:
    "Explore why students plagiarise – and how educators can act early to prevent it.",
  cta: {
    label: "Read more",
    href: "/blog/help-students-before-they-plagiarise",
  },

  date: "2025-05-24",

  content: `
    <p>Plagiarism doesn't begin with malicious intent. In most cases, students plagiarise because they are overwhelmed, underprepared, or unaware of what constitutes academic dishonesty.</p>

    <p>Instead of reacting to plagiarism with penalties alone, educators should focus on early intervention. Providing clear guidelines, tools for originality checking, and supportive feedback can transform student behavior before misconduct occurs.</p>

    <h2>What causes students to plagiarise?</h2>
    <ul>
      <li>Lack of understanding about citation and paraphrasing</li>
      <li>Time pressure and workload stress</li>
      <li>Fear of failure or underperforming</li>
    </ul>

    <p>WISEflow Originality gives educators visibility into originality patterns early in the process, empowering them to act preemptively – not punitively.</p>

    <blockquote>
      “When students are shown how to avoid plagiarism, most of them will.”  
      <br /><em>– University lecturer</em>
    </blockquote>

    <h2>Start the conversation</h2>
    <p>Use WISEflow Originality not just as a detection tool – but as a conversation starter about what academic integrity really means.</p>
  `,
};
