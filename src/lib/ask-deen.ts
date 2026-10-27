import { createServerFn } from "@tanstack/react-start";

const SYSTEM = `أنت مساعد في تطبيق «حميد». أجب بالعربية الفصحى الميسّرة عن الأسئلة الدينية.
التزم بالقرآن والسنة بفهم أهل السنة. إذا اختلف العلماء فاذكر القول الأشهر باختصار دون إطالة.
لا تخترع حديثاً ولا عزواً. إن لم تتيقن فقل ذلك.
للفتوى الخاصة (طلاق، ميراث، معاملة بعينها) وجّه السائل لعالم موثوق.
لا تتجاوز ١٨٠ كلمة.`;

export const askDeen = createServerFn({ method: "POST" })
  .validator((input: { question: string }) => {
    const question = (input?.question ?? "").trim().slice(0, 600);
    if (question.length < 4) throw new Error("اكتب سؤالاً أوضح");
    return { question };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "المساعد غير متاح حالياً" };
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 450,
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: data.question },
        ],
      }),
    });
    if (!res.ok) return { ok: false as const, error: "تعذّر الجواب، حاول لاحقاً" };
    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "لا جواب" };
    return { ok: true as const, text };
  });
