import { BlogCard } from "./BlogCard";
import { helpStudents } from "./help-students";
import { preventPlagiarism } from "./prevent-plagiarism";
import { stayOriginal } from "./stay-original";

export const heroBlog: BlogCard = {
  title: "Why Do Students Plagiarise",
  excerpt:
    "Plagiarism isn’t always an act of cheating. Some students copy under pressure, while others take a calculated shortcut." +
    "Our latest white paper reveals the two mindsets behind academic misconduct – reactive and proactive – and why each needs a different response." +
    "Through data and insights from 37 studies, we explore how institutions can shift from detection to prevention – and support students before misconduct occurs." +
    "Originality by UNIwise plays a central role: it’s more than a tool – it’s a guide for trust, learning and fairness.",
  cta: { label: "Read more", href: "/blog/why-do-students-plagiarise" },
};

export const blogCards: BlogCard[] = [
  heroBlog,
  helpStudents,
  preventPlagiarism,
  stayOriginal,
];

// ✅ Dette er NYT – bruges kun til BlogPost.tsx routing

export const blogPosts: Record<string, BlogCard> = {
  "help-students-before-they-plagiarise": helpStudents,
  "stay-original": stayOriginal,
  "prevent-plagiarism": preventPlagiarism,
  "why-do-students-plagiarise": heroBlog,
};
