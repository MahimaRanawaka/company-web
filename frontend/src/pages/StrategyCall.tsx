import { type ReactNode, forwardRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { strategyCallSchema, type StrategyCallInput } from "@/lib/schemas";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useBrand } from "@/brand/useBrand";
import { Container, Eyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const field =
  "h-11 w-full rounded-md border border-hairline bg-surface px-3 text-sm text-ink placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent";

const STAGES = [
  { value: "idea", label: "Idea stage" },
  { value: "startup", label: "Startup" },
  { value: "growing", label: "Growing business" },
  { value: "established", label: "Established company" },
] as const;

/** Goal options switch to match the sector chosen in "Interested in". */
const EN_HELP = [
  { label: "Software development", icon: "code" },
  { label: "QA & testing", icon: "shield-check" },
  { label: "AI & automation", icon: "sparkles" },
  { label: "Cloud & DevOps", icon: "cloud" },
  { label: "API & integrations", icon: "webhook" },
  { label: "UI/UX design", icon: "pen-tool" },
  { label: "E-commerce", icon: "shopping-cart" },
  { label: "Technical strategy", icon: "compass" },
  { label: "Other", icon: "plus" },
];

const OOLO_HELP = [
  { label: "Brand strategy", icon: "compass" },
  { label: "Marketing & growth", icon: "trending-up" },
  { label: "Branding & identity", icon: "palette" },
  { label: "Social media", icon: "share-2" },
  { label: "Content creation", icon: "pen-tool" },
  { label: "Campaign planning", icon: "megaphone" },
  { label: "Sales enablement", icon: "handshake" },
  { label: "SEO & performance", icon: "search" },
  { label: "Other", icon: "plus" },
];

const BUDGETS = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 – $5,000" },
  { value: "5k-plus", label: "$5,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

/** Compose the structured answers into a single readable message so the
 *  existing contact pipeline (Supabase + edge function) can store it with no
 *  schema changes. */
function composeMessage(d: StrategyCallInput): string {
  const stageLabel = STAGES.find((s) => s.value === d.stage)?.label ?? "—";
  const budgetLabel = BUDGETS.find((b) => b.value === d.budget)?.label ?? "—";
  const help = d.helpWith?.length ? d.helpWith.join(", ") : "—";
  const lines = [
    "[Strategy Call Request]",
    "",
    "— Contact —",
    `Phone / WhatsApp: ${d.phone}`,
    d.link ? `Website / Social: ${d.link}` : null,
    "",
    "— Business —",
    `Type: ${d.businessType || "—"}`,
    `Stage: ${stageLabel}`,
    `Team size: ${d.teamSize || "—"}`,
    "",
    "— Goals & Challenges —",
    `Help with: ${help}`,
    `Biggest challenge: ${d.challenge}`,
    `Desired outcome: ${d.outcome || "—"}`,
    "",
    "— Investment / Readiness —",
    `Budget: ${budgetLabel}`,
    `Looking to start: ${d.startTimeline || "—"}`,
    "",
    "— Scheduling —",
    `Preferred date: ${d.preferredDate || "—"}`,
    `Preferred time: ${d.preferredTime || "—"}`,
    `Time zone: ${d.timezone || "—"}`,
    "",
    "— Other —",
    `How they heard about us: ${d.hearAbout || "—"}`,
    `Consent to contact: yes`,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export default function StrategyCall() {
  const { brand } = useBrand();
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<StrategyCallInput>({
    resolver: zodResolver(strategyCallSchema),
    defaultValues: { brand_interest: brand, helpWith: [] },
  });

  // goal options follow the selected sector
  const brandInterest = watch("brand_interest") ?? brand;
  const helpOptions = brandInterest === "oolo" ? OOLO_HELP : EN_HELP;

  // clear previously-picked goals when the sector changes (they no longer apply)
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setValue("helpWith", []);
  }, [brandInterest, setValue]);

  useEffect(() => {
    document.title = "Book a Strategy Call · En'nobler / Oolo";
  }, []);

  const onSubmit = (data: StrategyCallInput) =>
    mutation.mutate({
      name: data.name,
      email: data.email,
      company: data.company || "",
      brand_interest: data.brand_interest,
      message: composeMessage(data),
      website: data.website,
    });

  if (mutation.isSuccess) {
    return (
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto flex max-w-xl items-start gap-3 rounded-lg border border-hairline bg-surface p-6">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h1 className="text-2xl">Your strategy call request is in.</h1>
              <p className="mt-2 text-muted">
                We'll review your details and confirm a time within one business day. Keep an eye on
                your inbox and WhatsApp.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Book a Strategy Call</Eyebrow>
          <h1 className="text-4xl md:text-5xl">Let's map your next move.</h1>
          <p className="mt-4 text-muted">
            A focused 30-minute session to understand your goals and whether En'nobler / Oolo is the
            right team to help. The more you share, the more useful the call.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-12" noValidate>
            {/* honeypot */}
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

            {/* Contact Information */}
            <FormSection title="Contact Information" step="01">
              <Field label="Full name" required error={errors.name?.message}>
                <input className={field} placeholder="Your full name" {...register("name")} />
              </Field>
              <Field label="Email address" required error={errors.email?.message}>
                <input className={field} type="email" placeholder="you@company.com" {...register("email")} />
              </Field>
              <Field label="Phone / WhatsApp number" required error={errors.phone?.message}>
                <input className={field} type="tel" placeholder="+94 ..." {...register("phone")} />
              </Field>
              <Field label="Company / brand name" error={errors.company?.message}>
                <input className={field} placeholder="Optional" {...register("company")} />
              </Field>
              <Field label="Website or social media link" error={errors.link?.message}>
                <input className={field} placeholder="Optional" {...register("link")} />
              </Field>
              <Field label="Interested in">
                <select className={field} {...register("brand_interest")}>
                  <option value="ennobler">En'nobler — IT & Engineering</option>
                  <option value="oolo">Oolo — Marketing & Creative</option>
                </select>
              </Field>
            </FormSection>

            {/* Business Information */}
            <FormSection title="Business Information" step="02">
              <Field label="What type of business are you in?">
                <input className={field} placeholder="e.g. SaaS, e-commerce, agency…" {...register("businessType")} />
              </Field>
              <Field label="What is your current stage?">
                <div className="grid gap-2 sm:grid-cols-2">
                  {STAGES.map((s) => (
                    <Radio key={s.value} label={s.label} value={s.value} {...register("stage")} />
                  ))}
                </div>
              </Field>
              <Field label="Team size">
                <input className={field} placeholder="Optional — e.g. 1–5, 10+" {...register("teamSize")} />
              </Field>
            </FormSection>

            {/* Goals & Challenges */}
            <FormSection title="Goals & Challenges" step="03">
              <Field label="What would you like help with?">
                <p className="-mt-1 mb-2 text-xs text-subtle">
                  Tailored to your{" "}
                  <span className="text-accent">
                    {brandInterest === "oolo" ? "Oolo — Marketing & Creative" : "En'nobler — IT & Engineering"}
                  </span>{" "}
                  selection above.
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {helpOptions.map((opt) => (
                    <Check key={opt.label} label={opt.label} icon={opt.icon} value={opt.label} {...register("helpWith")} />
                  ))}
                </div>
              </Field>
              <Field label="What is your biggest challenge right now?" required error={errors.challenge?.message}>
                <textarea
                  rows={4}
                  className={cn(field, "h-auto py-2.5")}
                  placeholder="The problem you most want to solve."
                  {...register("challenge")}
                />
              </Field>
              <Field label="What outcome do you want from this strategy call?" error={errors.outcome?.message}>
                <textarea
                  rows={3}
                  className={cn(field, "h-auto py-2.5")}
                  placeholder="What a great result looks like for you."
                  {...register("outcome")}
                />
              </Field>
            </FormSection>

            {/* Investment / Readiness */}
            <FormSection title="Investment / Readiness" subtitle="Optional, but helps us prepare" step="04">
              <Field label="What is your budget range?">
                <div className="grid gap-2 sm:grid-cols-2">
                  {BUDGETS.map((b) => (
                    <Radio key={b.value} label={b.label} value={b.value} {...register("budget")} />
                  ))}
                </div>
              </Field>
              <Field label="When are you looking to start?">
                <input className={field} placeholder="e.g. Immediately, next quarter…" {...register("startTimeline")} />
              </Field>
            </FormSection>

            {/* Scheduling */}
            <FormSection title="Scheduling" step="05">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred date">
                  <input className={field} type="date" {...register("preferredDate")} />
                </Field>
                <Field label="Preferred time">
                  <input className={field} type="time" {...register("preferredTime")} />
                </Field>
              </div>
              <Field label="Time zone">
                <input className={field} placeholder="e.g. GMT+5:30 (Sri Lanka)" {...register("timezone")} />
              </Field>
            </FormSection>

            {/* Final Confirmation */}
            <FormSection title="Final Confirmation" step="06">
              <Field label="How did you hear about us?">
                <input className={field} placeholder="Optional" {...register("hearAbout")} />
              </Field>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-hairline accent-[rgb(var(--brand-accent))]"
                  {...register("consent")}
                />
                <span className="text-sm text-muted">
                  I agree to be contacted regarding this strategy session.
                </span>
              </label>
              {errors.consent?.message && (
                <span className="block text-xs text-red-500">{errors.consent.message}</span>
              )}
            </FormSection>

            {mutation.isError && (
              <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
            )}

            <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
              {mutation.isPending ? "Booking…" : "Book My Strategy Call"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function FormSection({
  title,
  subtitle,
  step,
  children,
}: {
  title: string;
  subtitle?: string;
  step: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="space-y-5 border-t border-hairline pt-8">
      <legend className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-subtle">{step}</span>
        <span className="text-xl font-semibold text-ink">{title}</span>
        {subtitle && <span className="text-sm text-subtle">— {subtitle}</span>}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

const Radio = forwardRef<HTMLInputElement, { label: string } & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, ...props }, ref) => (
    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-ink has-[:checked]:border-accent">
      <input ref={ref} type="radio" className="h-4 w-4 accent-[rgb(var(--brand-accent))]" {...props} />
      {label}
    </label>
  ),
);
Radio.displayName = "Radio";

const Check = forwardRef<
  HTMLInputElement,
  { label: string; icon?: string } & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, icon, ...props }, ref) => (
  <label className="flex cursor-pointer items-center gap-2.5 rounded-md border border-hairline bg-surface px-3 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:text-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent">
    <input ref={ref} type="checkbox" className="h-4 w-4 shrink-0 accent-[rgb(var(--brand-accent))]" {...props} />
    {icon && <Icon name={icon} className="h-4 w-4 shrink-0" />}
    <span>{label}</span>
  </label>
));
Check.displayName = "Check";
