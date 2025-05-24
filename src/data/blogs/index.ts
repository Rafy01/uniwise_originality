import { BlogCard } from "./BlogCard";
import { helpStudents } from "./help-students";
import { preventPlagiarism } from "./prevent-plagiarism";
import { stayOriginal } from "./stay-original";
import { heroBlog } from "./hero-blog";









export const blogCards: BlogCard[] = [
  heroBlog,
  helpStudents,
  preventPlagiarism,
  stayOriginal,
];


export const blogPosts: Record<string, BlogCard> = {
  "help-students-before-they-plagiarise": helpStudents,
  "5-ways-to-avoid-plagiarism": stayOriginal,
  "how-to-avoid-plagiarism": preventPlagiarism,
  "why-do-students-plagiarise": heroBlog,
};
