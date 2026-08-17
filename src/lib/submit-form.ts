/**
 * Central form submission point.
 *
 * Every form on the site funnels through here so a real backend or email
 * service (Lovable Cloud, an ESP, a CRM webhook) can be connected in ONE
 * place later. Until then nothing is persisted and no fake data is created —
 * the form simply reports success back to the UI.
 */
export type FormKind = "volunteer" | "choir" | "mailing-list" | "contact";

export async function submitForm(kind: FormKind, values: Record<string, unknown>) {
  // TODO: connect to a backend/email service, e.g.
  // await fetch("/api/public/forms", { method: "POST", body: JSON.stringify({ kind, values }) })
  if (import.meta.env.DEV) {
    console.info(`[form:${kind}] ready to send`, Object.keys(values));
  }
  await new Promise((resolve) => setTimeout(resolve, 550));
  return { ok: true as const };
}
