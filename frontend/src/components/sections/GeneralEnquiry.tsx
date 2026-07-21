import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import type { GeneralEnquirySection } from "@/content/types";
import { generalEnquirySchema, type GeneralEnquiryInput } from "@/lib/schemas";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useBrand } from "@/brand/useBrand";
import { onEngagementModel } from "@/lib/engagementModelSignal";
import { Container, Eyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnquiryField, enquiryFieldClass as field } from "./EnquiryField";
import { EnquiryInfoCard } from "./EnquiryInfoCard";

function composeMessage(d: GeneralEnquiryInput): string {
  const lines = [
    "[General Enquiry]",
    "",
    `Engagement model: ${d.engagementModel || "Not sure yet — recommend one"}`,
    `Indicative budget: ${d.indicativeBudget || "—"}`,
    `Target start: ${d.targetStart || "—"}`,
    `Country: ${d.country || "—"}`,
    `How they found us: ${d.source || "—"}`,
    "",
    "What they want to achieve:",
    d.requirement,
  ];
  return lines.join("\n");
}

export function GeneralEnquiry({ data }: { data: GeneralEnquirySection }) {
  const { brand } = useBrand();
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<GeneralEnquiryInput>({ resolver: zodResolver(generalEnquirySchema) });

  const nameLabel = data.nameLabel ?? "Full Name";
  const requirementLabel = data.requirementLabel ?? "What do you want to achieve?";
  const requirementPlaceholder =
    data.requirementPlaceholder ?? "Describe your brand, current stage, and the outcome you are aiming for.";
  const submitLabel = data.submitLabel ?? "Send Enquiry";

  // a quick-select pill elsewhere on the page (Cta section) can preselect
  // this form's Engagement Model and bring focus here.
  useEffect(
    () =>
      onEngagementModel((model) => {
        if (data.modelOptions.includes(model)) {
          setValue("engagementModel", model);
          setFocus("name");
        }
      }),
    [data.modelOptions, setValue, setFocus],
  );

  const onSubmit = (d: GeneralEnquiryInput) =>
    mutation.mutate({
      name: d.name,
      email: d.email,
      company: d.company || "",
      brand_interest: brand,
      message: composeMessage(d),
      website: d.website,
    });

  return (
    <section
      id={data.anchor}
      className={cn("bg-surface pb-14 md:pb-20 lg:pb-24", data.tightTop ? "pt-6 md:pt-8" : "pt-14 md:pt-20 lg:pt-24")}
    >
      <Container>
        {(data.eyebrow || data.title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            {data.title && <h2 className="text-3xl md:text-4xl">{data.title}</h2>}
            {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
          </div>
        )}

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-8">
          {/* enquiry form */}
          <div className="rounded-xl border border-hairline bg-canvas p-5 sm:p-7">
            {mutation.isSuccess ? (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg">Enquiry received.</h3>
                  <p className="mt-1 text-sm text-muted">We'll review your details and respond within one business day.</p>
                </div>
              </div>
            ) : (
              <>
                {data.formEyebrow && <p className="eyebrow mb-3">{data.formEyebrow}</p>}
                <h3 className="mb-5 text-xl">{data.formTitle}</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label={nameLabel} required error={errors.name?.message}>
                      <input className={field} {...register("name")} />
                    </EnquiryField>
                    <EnquiryField label="Work Email" required error={errors.email?.message}>
                      <input className={field} type="email" {...register("email")} />
                    </EnquiryField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label="Company">
                      <input className={field} {...register("company")} />
                    </EnquiryField>
                    <EnquiryField label="Country">
                      <input className={field} placeholder="e.g. UAE, Sri Lanka, Germany" {...register("country")} />
                    </EnquiryField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label="Engagement Model">
                      <select className={field} {...register("engagementModel")}>
                        {data.modelOptions.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </EnquiryField>
                    <EnquiryField label="Indicative Budget">
                      <select className={field} {...register("indicativeBudget")}>
                        {data.budgetOptions.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </EnquiryField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label="Target Start">
                      <select className={field} {...register("targetStart")}>
                        {data.startOptions.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </EnquiryField>
                    <EnquiryField label="How did you find us?">
                      <input className={field} placeholder="Optional" {...register("source")} />
                    </EnquiryField>
                  </div>
                  <EnquiryField label={requirementLabel} required error={errors.requirement?.message}>
                    <textarea
                      rows={3}
                      className={cn(field, "h-auto py-2.5")}
                      placeholder={requirementPlaceholder}
                      {...register("requirement")}
                    />
                  </EnquiryField>
                  <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
                    {mutation.isPending ? "Sending…" : submitLabel}
                  </Button>
                  {data.formNote && <p className="text-center text-[11px] text-subtle">{data.formNote}</p>}
                </form>
              </>
            )}
          </div>

          <EnquiryInfoCard eyebrow={data.infoEyebrow} title={data.infoTitle} items={data.infoItems} note={data.infoNote} />
        </div>
      </Container>
    </section>
  );
}
