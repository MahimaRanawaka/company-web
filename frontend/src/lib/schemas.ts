import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  company: z.string().max(120).optional().or(z.literal("")),
  brand_interest: z.enum(["ennobler", "oolo"]).optional(),
  message: z.string().min(10, "Tell us a little more (10+ characters)."),
  /** honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const applySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().max(40).optional().or(z.literal("")),
  path: z.string().optional(),
  experience: z.string().optional(),
  portfolio: z.string().max(200).optional().or(z.literal("")),
  cv: z.unknown().optional() as z.ZodType<FileList | undefined>,
  message: z.string().max(2000).optional().or(z.literal("")),
  website: z.string().max(0).optional(), // honeypot
});

export type ApplyInput = z.infer<typeof applySchema>;

export const strategyCallSchema = z.object({
  // Contact information
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(6, "Enter a phone / WhatsApp number."),
  company: z.string().max(120).optional().or(z.literal("")),
  link: z.string().max(200).optional().or(z.literal("")),
  // Business information
  businessType: z.string().max(200).optional().or(z.literal("")),
  stage: z.enum(["idea", "startup", "growing", "established"]).nullish(),
  teamSize: z.string().max(60).optional().or(z.literal("")),
  // Goals & challenges
  helpWith: z.array(z.string()).optional().default([]),
  challenge: z.string().min(10, "Tell us a little more (10+ characters)."),
  outcome: z.string().max(2000).optional().or(z.literal("")),
  // Investment / readiness
  budget: z.enum(["under-1k", "1k-5k", "5k-plus", "unsure"]).nullish(),
  startTimeline: z.string().max(120).optional().or(z.literal("")),
  // Scheduling
  preferredDate: z.string().optional().or(z.literal("")),
  preferredTime: z.string().optional().or(z.literal("")),
  timezone: z.string().max(80).optional().or(z.literal("")),
  // Final confirmation
  hearAbout: z.string().max(200).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you agree to be contacted." }),
  }),
  brand_interest: z.enum(["ennobler", "oolo"]).optional(),
  /** honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type StrategyCallInput = z.infer<typeof strategyCallSchema>;
