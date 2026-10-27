import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-deen-vPX7ksB7.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `أنت مساعد في تطبيق «حميد». أجب بالعربية الفصحى الميسّرة عن الأسئلة الدينية.
التزم بالقرآن والسنة بفهم أهل السنة. إذا اختلف العلماء فاذكر القول الأشهر باختصار دون إطالة.
لا تخترع حديثاً ولا عزواً. إن لم تتيقن فقل ذلك.
للفتوى الخاصة (طلاق، ميراث، معاملة بعينها) وجّه السائل لعالم موثوق.
لا تتجاوز ١٨٠ كلمة.`;
var askDeen_createServerFn_handler = createServerRpc({
	id: "d66bb39f67be62cced308761ad83d14f36de37b808f18edb61eb978ebac779c8",
	name: "askDeen",
	filename: "src/lib/ask-deen.ts"
}, (opts) => askDeen.__executeServer(opts));
var askDeen = createServerFn({ method: "POST" }).validator((input) => {
	const question = (input?.question ?? "").trim().slice(0, 600);
	if (question.length < 4) throw new Error("اكتب سؤالاً أوضح");
	return { question };
}).handler(askDeen_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "المساعد غير متاح حالياً"
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 450,
			messages: [{
				role: "system",
				content: SYSTEM
			}, {
				role: "user",
				content: data.question
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "تعذّر الجواب، حاول لاحقاً"
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "لا جواب"
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { askDeen_createServerFn_handler };
