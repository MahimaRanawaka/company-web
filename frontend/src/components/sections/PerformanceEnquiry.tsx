import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import type { PerformanceEnquirySection } from "@/content/types";
import { performanceEnquirySchema, type PerformanceEnquiryInput } from "@/lib/schemas";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useBrand } from "@/brand/useBrand";
import { Container, Eyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnquiryField, enquiryFieldClass as field, enquiryReadonlyFieldClass as readonlyField } from "./EnquiryField";
import { EnquiryInfoCard } from "./EnquiryInfoCard";

function composeMessage(
  d: PerformanceEnquiryInput,
  serviceContext: string | undefined,
  engagementModel: string,
  planFieldLabel: string,
): string {
  const lines = [
    `[Performance-Based Enquiry${serviceContext ? ` — ${serviceContext}` : ""}]`,
    "",
    `Engagement model: ${engagementModel}`,
    `${planFieldLabel}: ${d.selectedPlan || "Not sure yet — recommend one"}`,
    d.phone ? `Phone: ${d.phone}` : null,
    "",
    d.currentBaseline ? `Current baseline: ${d.currentBaseline}` : null,
    `Expected KPI / outcome: ${d.expectedKpi}`,
    d.targetTimeline ? `Target timeline: ${d.targetTimeline}` : null,
    d.monthlyBudget ? `Monthly media budget: ${d.monthlyBudget}` : null,
    d.requirement ? `\nRequirement:\n${d.requirement}` : null,
    d.additionalDetails ? `\nAdditional details:\n${d.additionalDetails}` : null,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function PerformanceEnquiry({ data }: { data: PerformanceEnquirySection }) {
  const { brand } = useBrand();
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PerformanceEnquiryInput>({ resolver: zodResolver(performanceEnquirySchema) });

  const planFieldLabel = data.planFieldLabel ?? "Selected Performance Plan";
  const showPhone = data.showPhone ?? true;
  const showCompany = data.showCompany ?? true;
  const requiredHints = data.requiredHints ?? true;
  const baselineLabel = data.baselineLabel ?? "Current Performance Baseline";
  const baselinePlaceholder = data.baselinePlaceholder ?? "e.g. Current conversion rate or CPA";
  const kpiLabel = data.kpiLabel ?? "Expected KPI";
  const kpiPlaceholder = data.kpiPlaceholder ?? "e.g. Improve conversion rate";
  const timelineLabel = data.timelineLabel ?? "Target Timeline";
  const timelinePlaceholder = data.timelinePlaceholder ?? "e.g. 3–6 months";
  const showBudget = data.showBudget ?? true;
  const showRequirement = data.showRequirement ?? true;
  const requirementLabel = data.requirementLabel ?? "Campaign or Marketing Requirement";
  const requirementPlaceholder = data.requirementPlaceholder ?? "Briefly describe the campaign or growth requirement...";
  const showAdditionalDetails = data.showAdditionalDetails ?? true;
  const submitLabel = data.submitLabel ?? "Request Performance Proposal";

  const onSubmit = (d: PerformanceEnquiryInput) =>
    mutation.mutate({
      name: d.name,
      email: d.email,
      company: d.company || "",
      brand_interest: brand,
      message: composeMessage(d, data.serviceContext, data.engagementModel, planFieldLabel),
      website: d.website,
    });

  return (
    <section id={data.anchor} className="bg-surface py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-8">
          {/* enquiry form */}
          <div className="rounded-xl border border-hairline bg-canvas p-5 sm:p-7">
            {mutation.isSuccess ? (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg">Proposal request received.</h3>
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
                    {data.serviceContext && (
                      <EnquiryField label="Service Context">
                        <input className={readonlyField} value={data.serviceContext} readOnly />
                      </EnquiryField>
                    )}
                    <EnquiryField label="Engagement Model">
                      <input className={readonlyField} value={data.engagementModel} readOnly />
                    </EnquiryField>
                  </div>
                  <EnquiryField label={planFieldLabel}>
                    <select className={field} {...register("selectedPlan")}>
                      {data.planOptions.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </EnquiryField>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label="Full Name" required error={errors.name?.message}>
                      <input className={field} {...register("name")} />
                    </EnquiryField>
                    <EnquiryField label="Work Email" required error={errors.email?.message}>
                      <input className={field} type="email" {...register("email")} />
                    </EnquiryField>
                  </div>
                  {(showPhone || showCompany) && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {showPhone && (
                        <EnquiryField label="Phone Number" required error={errors.phone?.message}>
                          <input className={field} type="tel" {...register("phone")} />
                        </EnquiryField>
                      )}
                      {showCompany && (
                        <EnquiryField label="Company" required error={errors.company?.message}>
                          <input className={field} {...register("company")} />
                        </EnquiryField>
                      )}
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label={baselineLabel} required={requiredHints} error={errors.currentBaseline?.message}>
                      <input className={field} placeholder={baselinePlaceholder} {...register("currentBaseline")} />
                    </EnquiryField>
                    <EnquiryField label={kpiLabel} required error={errors.expectedKpi?.message}>
                      <input className={field} placeholder={kpiPlaceholder} {...register("expectedKpi")} />
                    </EnquiryField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <EnquiryField label={timelineLabel} required={requiredHints} error={errors.targetTimeline?.message}>
                      <input className={field} placeholder={timelinePlaceholder} {...register("targetTimeline")} />
                    </EnquiryField>
                    {showBudget && (
                      <EnquiryField label="Monthly Media Budget">
                        <input className={field} placeholder="Optional" {...register("monthlyBudget")} />
                      </EnquiryField>
                    )}
                  </div>
                  {showRequirement && (
                    <EnquiryField label={requirementLabel} required={requiredHints} error={errors.requirement?.message}>
                      <textarea
                        rows={3}
                        className={cn(field, "h-auto py-2.5")}
                        placeholder={requirementPlaceholder}
                        {...register("requirement")}
                      />
                    </EnquiryField>
                  )}
                  {showAdditionalDetails && (
                    <EnquiryField label="Additional Details">
                      <textarea
                        rows={3}
                        className={cn(field, "h-auto py-2.5")}
                        placeholder="Add attribution, reporting, or channel details..."
                        {...register("additionalDetails")}
                      />
                    </EnquiryField>
                  )}
                  <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
                    {mutation.isPending ? "Sending…" : submitLabel}
                  </Button>
                </form>
              </>
            )}
          </div>

          <EnquiryInfoCard
            eyebrow={data.infoEyebrow}
            title={data.infoTitle}
            items={data.infoItems}
            note={data.infoNote}
            disclaimer={data.disclaimer}
          />
        </div>
      </Container>
    </section>
  );
}
