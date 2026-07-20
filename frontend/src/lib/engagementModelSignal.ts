/** Lets a quick-select pill (Cta section) preselect the Engagement Model
 *  field on a paired generalEnquiry form elsewhere on the same page. */
const EVENT = "oolo:engagement-model";

export function broadcastEngagementModel(model: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: model }));
}

export function onEngagementModel(handler: (model: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
