import { z } from "zod";

// create issue schema
export const issueSchema = z.object({
  title: z.string().min(3).max(20),
  description: z.string().min(3).max(100),
  status: z.enum(["open", "closed", "in-progress"]),
  city: z.string().min(3).max(30),
  state: z.string().min(3).max(30),
});

export type TIssueSchema = z.infer<typeof issueSchema>;

export type TIssue = {
  id: string;
  title: string;
  description: string;
  status: "open" | "closed" | "in-progress";
  city: string;
  state: string;
  authorId: string;
};
