import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import type { ContactFormSection } from "@/content/types";
import { applySchema, contactSchema, type ApplyInput, type ContactInput } from "@/lib/schemas";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useBrand } from "@/brand/useBrand";
import { Container } from "@/components/primitives";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const field =
  "h-11 w-full rounded-md border border-hairline bg-canvas px-3 text-sm text-ink placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent";

export function ContactFormView({ data }: { data: ContactFormSection }) {
  return (
    <section id={data.anchor} className="bg-surface py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            {data.eyebrow && <p className="eyebrow mb-3">{data.eyebrow}</p>}
            <h2 className="text-3xl md:text-4xl">{data.title}</h2>
            {data.body && <p className="mt-4 max-w-md leading-relaxed text-muted">{data.body}</p>}
            {data.secondaryCta && (
              <div className="mt-6">
                <ButtonLink to={data.secondaryCta.to} variant="outline">
                  {data.secondaryCta.label}
                </ButtonLink>
              </div>
            )}
          </div>
          {data.variant === "apply" ? <ApplyForm /> : <LeadForm />}
        </div>
      </Container>
    </section>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-hairline bg-canvas p-5 sm:p-7">{children}</div>;
}

function Success({ title, note }: { title: string; note: string }) {
  return (
    <Shell>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
        <div>
          <h3 className="text-lg">{title}</h3>
          <p className="mt-1 text-sm text-muted">{note}</p>
        </div>
      </div>
    </Shell>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function LeadForm() {
  const { brand } = useBrand();
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { brand_interest: brand } });

  if (mutation.isSuccess) return <Success title="Thanks — we've got it." note="We respond within one business day." />;

  return (
    <Shell>
      <h3 className="mb-5 text-lg">Start a conversation</h3>
      <form onSubmit={handleSubmit((d) => mutation.mutate(d))} className="space-y-4" noValidate>
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />
        <Field label="Name" error={errors.name?.message}>
          <input className={field} placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input className={field} type="email" placeholder="you@company.com" {...register("email")} />
        </Field>
        <Field label="What are you looking for?">
          <select className={field} {...register("brand_interest")}>
            <option value="ennobler">IT / Software Development</option>
            <option value="oolo">Oolo Marketing</option>
          </select>
        </Field>
        <Field label="Tell us about your problem" error={errors.message?.message}>
          <textarea rows={4} className={cn(field, "h-auto py-2.5")} placeholder="What would you like to fix, build, or improve?" {...register("message")} />
        </Field>
        <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
          {mutation.isPending ? "Sending…" : "Send Message"}
        </Button>
        <p className="text-center text-[11px] text-subtle">We respond within 1 business day. No sales pitch — just a real conversation.</p>
      </form>
    </Shell>
  );
}

function ApplyForm() {
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplyInput>({ resolver: zodResolver(applySchema) });

  const cvName = watch("cv")?.[0]?.name;

  if (mutation.isSuccess) return <Success title="Application received." note="We'll review your details and get back to you with next steps." />;

  const onSubmit = (d: ApplyInput) =>
    mutation.mutate({
      name: d.name,
      email: d.email,
      company: d.path || undefined,
      message: [
        d.message,
        d.phone ? `Phone: ${d.phone}` : "",
        d.path ? `Preferred path: ${d.path}` : "",
        d.experience ? `Experience: ${d.experience}` : "",
        d.portfolio ? `Portfolio: ${d.portfolio}` : "",
        d.cv?.[0]?.name ? `CV file: ${d.cv[0].name}` : "",
      ]
        .filter(Boolean)
        .join("\n") || "Career application",
      website: d.website,
    });

  return (
    <Shell>
      <h3 className="mb-5 text-lg">Send your application</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" error={errors.name?.message}>
            <input className={field} placeholder="Your full name" {...register("name")} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input className={field} type="email" placeholder="you@email.com" {...register("email")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone Number">
            <input className={field} placeholder="Your phone number" {...register("phone")} />
          </Field>
          <Field label="Preferred Path">
            <select className={field} {...register("path")}>
              <option value="">Select path</option>
              <option>En'nobler IT / Software</option>
              <option>En'nobler.QaaS / QA</option>
              <option>Business Analysis / Product</option>
              <option>Oolo Marketing</option>
              <option>UI/UX / Creative</option>
              <option>Internship / Training</option>
            </select>
          </Field>
        </div>
        <Field label="Experience Level">
          <select className={field} {...register("experience")}>
            <option value="">Select level</option>
            <option>Student</option>
            <option>Fresh Graduate</option>
            <option>Intern</option>
            <option>Junior</option>
            <option>Experienced</option>
          </select>
        </Field>
        <Field label="Upload CV">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full rounded-md border border-hairline bg-canvas px-3 py-2 text-sm text-muted file:mr-3 file:rounded file:border-0 file:bg-surface-2 file:px-3 file:py-1.5 file:text-xs file:text-ink"
            {...register("cv")}
          />
          {cvName && <span className="mt-1 block text-xs text-subtle">Selected: {cvName}</span>}
        </Field>
        <Field label="Portfolio / LinkedIn / GitHub">
          <input className={field} placeholder="Paste link here" {...register("portfolio")} />
        </Field>
        <Field label="Message">
          <textarea rows={3} className={cn(field, "h-auto py-2.5")} placeholder="Tell us about your interest" {...register("message")} />
        </Field>
        <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
          {mutation.isPending ? "Submitting…" : "Submit Application"}
        </Button>
      </form>
    </Shell>
  );
}
