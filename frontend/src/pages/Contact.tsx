import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useBrand } from "@/brand/useBrand";
import { Container, Eyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const field = "h-11 w-full rounded-md border border-hairline bg-surface px-3 text-sm text-ink placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent";

export default function Contact() {
  const { brand } = useBrand();
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { brand_interest: brand },
  });

  const onSubmit = (data: ContactInput) => mutation.mutate(data);

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-xl">
          <Eyebrow>Let's talk</Eyebrow>
          <h1 className="text-4xl md:text-5xl">Start a conversation.</h1>
          <p className="mt-4 text-muted">
            Tell us what you're building. We'll route it to the right side of the studio.
          </p>

          {mutation.isSuccess ? (
            <div className="mt-10 flex items-start gap-3 rounded-lg border border-hairline bg-surface p-6">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <h2 className="text-lg">Thanks — we've got it.</h2>
                <p className="mt-1 text-sm text-muted">We'll be in touch within one business day.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5" noValidate>
              {/* honeypot */}
              <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

              <Field label="Name" error={errors.name?.message}>
                <input className={field} placeholder="Your name" {...register("name")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input className={field} type="email" placeholder="you@company.com" {...register("email")} />
              </Field>
              <Field label="Company" error={errors.company?.message}>
                <input className={field} placeholder="Optional" {...register("company")} />
              </Field>
              <Field label="Interested in">
                <select className={field} {...register("brand_interest")}>
                  <option value="ennobler">En'nobler — IT & Engineering</option>
                  <option value="oolo">Oolo — Marketing & Creative</option>
                </select>
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  rows={5}
                  className={cn(field, "h-auto py-2.5")}
                  placeholder="What are you trying to achieve?"
                  {...register("message")}
                />
              </Field>

              {mutation.isError && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}

              <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
                {mutation.isPending ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
