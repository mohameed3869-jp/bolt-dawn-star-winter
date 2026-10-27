import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BookOpen, Coins, Compass, Heart, MessageCircle, Moon, Sparkles, Sun } from "lucide-react";
import { ADHKAR, type Dhikr } from "@/data/adhkar";
import { DUAS } from "@/data/duas";
import { JUZ_STARTS, SURAHS } from "@/data/quran";
import { askDeen } from "@/lib/ask-deen";
import { khatmaPct, useHameed, visiblePages, type Tab } from "@/lib/hameed-store";

export const Route = createFileRoute("/")({ component: Home });

const PRAYERS = [
  ["الفجر", "Fajr"],
  ["الشروق", "Sunrise"],
  ["الظهر", "Dhuhr"],
  ["العصر", "Asr"],
  ["المغرب", "Maghrib"],
  ["العشاء", "Isha"],
] as const;

const KAABA = { lat: 21.4225, lng: 39.8262 };

function qiblaBearing(lat: number, lng: number) {
  const φ = (lat * Math.PI) / 180;
  const λ = (lng * Math.PI) / 180;
  const φk = (KAABA.lat * Math.PI) / 180;
  const λk = (KAABA.lng * Math.PI) / 180;
  const y = Math.sin(λk - λ);
  const x = Math.cos(φ) * Math.tan(φk) - Math.sin(φ) * Math.cos(λk - λ);
  return (Math.atan2(y, x) * 180) / Math.PI;
}

function norm(deg: number) {
  return ((deg % 360) + 360) % 360;
}

function Home() {
  const tab = useHameed((s) => s.tab);
  const setTab = useHameed((s) => s.setTab);
  const surah = useHameed((s) => s.surah);

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col bg-bg text-fg">
      <header className="px-5 pt-6 pb-2">
        <p className="text-xs tracking-[0.28em] text-primary">بِسْمِ اللَّهِ</p>
        <h1 className="mt-1 text-3xl font-semibold">حميد</h1>
        <p className="text-sm text-muted">ختمة، صلاة، أذكار، أدعية، زكاة</p>
      </header>
      <main className="flex-1 px-4 pb-28">
        {tab === "today" && <Today />}
        {tab === "quran" && (surah ? <Reader n={surah} /> : <SurahList />)}
        {tab === "khatma" && <Khatma />}
        {tab === "adhkar" && <Adhkar />}
        {tab === "duas" && <Duas />}
        {tab === "zakat" && <Zakat />}
        {tab === "ask" && <Ask />}
        {tab === "qibla" && <Qibla />}
      </main>
      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-lg gap-1 overflow-x-auto border-t border-border bg-surface/95 px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] backdrop-blur">
        {(
          [
            ["today", "اليوم", Sun],
            ["quran", "مصحف", BookOpen],
            ["khatma", "ختمة", Sparkles],
            ["adhkar", "أذكار", Moon],
            ["duas", "أدعية", Heart],
            ["zakat", "زكاة", Coins],
            ["ask", "اسأل", MessageCircle],
            ["qibla", "قبلة", Compass],
          ] as const
        ).map(([id, label, Icon]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id as Tab)}
            className={
              "flex min-h-11 min-w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[11px] " +
              (tab === id ? "bg-surface-2 text-primary" : "text-muted")
            }
          >
            <Icon size={18} strokeWidth={1.75} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-border bg-surface p-4 ${className}`}>{children}</section>;
}

function Today() {
  const juz = useHameed((s) => s.juz);
  const goal = useHameed((s) => s.goal);
  const pagesToday = useHameed((s) => s.pagesToday);
  const lastDay = useHameed((s) => s.lastDay);
  const streak = useHameed((s) => s.streak);
  const addPages = useHameed((s) => s.addPages);
  const openSurah = useHameed((s) => s.openSurah);
  const tasbih = useHameed((s) => s.tasbih);
  const bump = useHameed((s) => s.bumpTasbih);
  const reset = useHameed((s) => s.resetTasbih);
  const pages = visiblePages(pagesToday, lastDay);
  const pct = khatmaPct(juz);
  const next = juz.findIndex((v) => !v);
  const [times, setTimes] = useState<Record<string, string> | null>(null);
  const [place, setPlace] = useState("الدمام");
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const load = (lat: number, lng: number, label: string) => {
      setPlace(label);
      fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=4`)
        .then((r) => r.json())
        .then((j) => setTimes(j?.data?.timings ?? null))
        .catch(() => setTimes(null));
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => load(p.coords.latitude, p.coords.longitude, "موقعك"),
        () => load(26.4207, 50.0888, "الدمام"),
        { timeout: 4000 },
      );
    } else load(26.4207, 50.0888, "الدمام");
  }, []);

  const nextPrayer = useMemo(() => {
    if (!times) return null;
    const mins = now.getHours() * 60 + now.getMinutes();
    const slots: { ar: string; t: string; tomorrow: boolean }[] = [];
    for (const [ar, key] of PRAYERS) {
      if (key === "Sunrise") continue;
      const t = (times[key] ?? "00:00").slice(0, 5);
      const [h, m] = t.split(":").map(Number);
      slots.push({ ar, t, tomorrow: h * 60 + m <= mins });
    }
    const upcoming = slots.find((s) => !s.tomorrow) ?? { ...slots[0], tomorrow: true };
    const [h, m] = upcoming.t.split(":").map(Number);
    const at = new Date(now);
    if (upcoming.tomorrow) at.setDate(at.getDate() + 1);
    at.setHours(h, m, 0, 0);
    const left = Math.max(0, Math.floor((at.getTime() - now.getTime()) / 1000));
    const hh = String(Math.floor(left / 3600)).padStart(2, "0");
    const mm = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
    const ss = String(left % 60).padStart(2, "0");
    return { ar: upcoming.ar, t: upcoming.t, clock: `${hh}:${mm}:${ss}` };
  }, [times, now]);

  const hijri = now.toLocaleDateString("ar-SA-u-ca-islamic", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const greg = now.toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <p className="text-lg font-semibold">{hijri}</p>
        <p className="text-sm text-muted">{greg}</p>
      </Card>
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-muted">الختمة</p>
            <p className="text-4xl font-semibold text-primary">{pct}٪</p>
            <p className="text-sm text-muted">{juz.filter(Boolean).length} من 30 جزءاً</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-muted">سلسلة الأيام</p>
            <p className="text-2xl">{streak}</p>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg">
          <div className="h-full bg-primary" style={{ width: `${Math.min(100, (pages / goal) * 100)}%` }} />
        </div>
        <p className="mt-2 text-sm text-muted">
          ورد اليوم {pages} / {goal} صفحة
          {next >= 0 ? ` · التالي: الجزء ${next + 1}` : " · أتممت الختمة"}
        </p>
        <div className="mt-3 flex gap-2">
          {[1, 4, 10].map((n) => (
            <button key={n} type="button" onClick={() => addPages(n)} className="min-h-11 flex-1 rounded-xl bg-surface-2 text-sm">
              +{n}
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-semibold">أوقات الصلاة</h2>
          <span className="text-xs text-muted">{place} · أم القرى</span>
        </div>
        {nextPrayer && (
          <div className="mb-3 rounded-xl bg-bg px-3 py-3 text-center">
            <p className="text-xs text-muted">المتبقي على {nextPrayer.ar}</p>
            <p className="text-3xl font-semibold tracking-widest text-primary">{nextPrayer.clock}</p>
            <p className="text-sm text-muted">عند {nextPrayer.t}</p>
          </div>
        )}
        <ul className="grid grid-cols-3 gap-2">
          {PRAYERS.filter(([, k]) => k !== "Sunrise").map(([ar, key]) => (
            <li key={key} className="rounded-xl bg-bg px-2 py-2 text-center">
              <p className="text-xs text-muted">{ar}</p>
              <p className="text-lg">{times ? times[key]?.slice(0, 5) : "—"}</p>
            </li>
          ))}
        </ul>
      </Card>

      <button
        type="button"
        onClick={bump}
        className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-border bg-surface-2"
      >
        <span className="text-xs text-muted">سبحة</span>
        <span className="text-5xl font-semibold text-primary">{tasbih}</span>
        <span className="text-xs text-muted">اضغط للعد · حتى 99 ثم تعود</span>
      </button>
      <div className="flex gap-2">
        <button type="button" onClick={reset} className="min-h-11 flex-1 rounded-xl border border-border text-sm text-muted">
          تصفير السبحة
        </button>
        <button
          type="button"
          onClick={() => openSurah(18)}
          className="min-h-11 flex-1 rounded-xl bg-primary text-sm font-semibold text-primary-ink"
        >
          سورة الكهف
        </button>
      </div>
    </div>
  );
}

function SurahList() {
  const openSurah = useHameed((s) => s.openSurah);
  const bookmarks = useHameed((s) => s.bookmarks);
  const [q, setQ] = useState("");
  const list = SURAHS.filter((s) => s.name.includes(q.trim()) || String(s.n) === q.trim());
  return (
    <div className="flex flex-col gap-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="ابحث عن سورة"
        className="min-h-11 rounded-xl border border-border bg-surface px-4 outline-none"
      />
      {bookmarks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {bookmarks.map((n) => (
            <button key={n} type="button" onClick={() => openSurah(n)} className="min-h-9 rounded-full bg-surface-2 px-3 text-sm text-primary">
              {SURAHS[n - 1]?.name}
            </button>
          ))}
        </div>
      )}
      <ul className="flex flex-col gap-1">
        {list.map((s) => (
          <li key={s.n}>
            <button
              type="button"
              onClick={() => openSurah(s.n)}
              className="flex min-h-14 w-full items-center gap-3 rounded-xl px-2 text-right hover:bg-surface"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-surface-2 text-sm text-primary">{s.n}</span>
              <span className="flex-1 font-medium">{s.name}</span>
              <span className="text-xs text-muted">
                {s.place} · {s.ayahs}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Ayah = { number: number; numberInSurah: number; text: string };

function Reader({ n }: { n: number }) {
  const close = useHameed((s) => s.closeSurah);
  const bookmarks = useHameed((s) => s.bookmarks);
  const toggle = useHameed((s) => s.toggleBookmark);
  const meta = SURAHS[n - 1];
  const [ayahs, setAyahs] = useState<Ayah[] | null>(null);
  const [err, setErr] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAyahs(null);
    setErr("");
    fetch(`https://api.alquran.cloud/v1/surah/${n}/ar.asad`)
      .then((r) => r.json())
      .then((j) => setAyahs(j.data.ayahs as Ayah[]))
      .catch(() => setErr("تعذّر تحميل السورة. تحقق من الاتصال."));
  }, [n]);

  const play = (global: number) => {
    audio?.pause();
    const a = new Audio(`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${global}.mp3`);
    setAudio(a);
    void a.play();
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <button type="button" onClick={close} className="min-h-11 rounded-xl px-3 text-sm text-primary">
          السور
        </button>
        <button type="button" onClick={() => toggle(n)} className="min-h-11 rounded-xl px-3 text-sm text-muted">
          {bookmarks.includes(n) ? "إزالة الإشارة" : "إشارة"}
        </button>
      </div>
      <h2 className="text-center font-[family-name:var(--font-quran)] text-3xl">{meta?.name}</h2>
      <p className="mb-4 text-center text-xs text-muted">
        {meta?.place} · {meta?.ayahs} آية · العسقلاني / أسد · صوت: العفاسي
      </p>
      {err && <p className="text-center text-sm text-primary">{err}</p>}
      {!ayahs && !err && <p className="text-center text-sm text-muted">جارٍ التحميل…</p>}
      <div className="flex flex-col gap-4">
        {n !== 1 && n !== 9 && (
          <p className="text-center font-[family-name:var(--font-quran)] text-2xl text-primary">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        )}
        {ayahs?.map((a) => (
          <p key={a.number} className="font-[family-name:var(--font-quran)] text-2xl leading-[2.1]">
            {a.text}{" "}
            <button type="button" onClick={() => play(a.number)} className="align-middle text-sm text-primary">
              ﴿{a.numberInSurah}﴾
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

function Zakat() {
  const [gold, setGold] = useState("280");
  const [wealth, setWealth] = useState("");
  const price = Number(gold) || 0;
  const money = Number(wealth) || 0;
  const nisab = 85 * price;
  const due = money >= nisab && nisab > 0 ? money * 0.025 : 0;
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <h2 className="font-semibold">حاسبة الزكاة</h2>
        <p className="mt-1 text-sm text-muted">النصاب ٨٥ غراماً من الذهب، والزكاة ٢٫٥٪ إذا بلغ المال النصاب وحال عليه الحول.</p>
        <label className="mt-3 block text-sm text-muted">
          سعر غرام الذهب (ر.س)
          <input
            inputMode="decimal"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            className="mt-1 min-h-11 w-full rounded-xl border border-border bg-bg px-3 text-fg outline-none"
          />
        </label>
        <label className="mt-3 block text-sm text-muted">
          المال الزكوي (نقد وذهب وفضة وعروض تجارة)
          <input
            inputMode="decimal"
            value={wealth}
            onChange={(e) => setWealth(e.target.value)}
            placeholder="0"
            className="mt-1 min-h-11 w-full rounded-xl border border-border bg-bg px-3 text-fg outline-none"
          />
        </label>
      </Card>
      <Card>
        <p className="text-sm text-muted">النصاب</p>
        <p className="text-2xl text-primary">{nisab ? nisab.toLocaleString("ar-SA") : "—"} ر.س</p>
        <p className="mt-3 text-sm text-muted">الزكاة الواجبة</p>
        <p className="text-3xl font-semibold">{due ? due.toLocaleString("ar-SA", { maximumFractionDigits: 2 }) : "٠"} ر.س</p>
        <p className="mt-2 text-xs text-muted">
          {money > 0 && money < nisab ? "المال دون النصاب، فلا زكاة فيه." : "تقدير تقريبي. الديون والحول يُراجعان مع أهل العلم."}
        </p>
      </Card>
    </div>
  );
}

function Duas() {
  return (
    <div className="flex flex-col gap-4">
      {DUAS.map((group) => (
        <div key={group.title}>
          <h2 className="mb-2 font-semibold text-primary">{group.title}</h2>
          <div className="flex flex-col gap-2">
            {group.items.map((item) => (
              <Card key={item.name}>
                <p className="text-sm text-muted">{item.name}</p>
                <p className="mt-1 font-[family-name:var(--font-quran)] text-xl leading-9">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Ask() {
  const ask = useServerFn(askDeen);
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const send = async () => {
    if (busy) return;
    setBusy(true);
    setErr("");
    setAnswer("");
    try {
      const res = await ask({ data: { question: q } });
      if (res.ok) setAnswer(res.text);
      else setErr(res.error);
    } catch {
      setErr("تعذّر الإرسال");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <h2 className="font-semibold">اسأل</h2>
        <p className="mt-1 text-sm text-muted">سؤال ديني عام. ليس فتوى خاصة، وللمسائل الشخصية ارجع إلى عالم.</p>
        <textarea
          value={q}
          onChange={(e) => setQ(e.target.value)}
          rows={4}
          maxLength={600}
          placeholder="مثال: ما فضل آية الكرسي؟"
          className="mt-3 w-full rounded-xl border border-border bg-bg p-3 text-fg outline-none"
        />
        <button
          type="button"
          disabled={busy || q.trim().length < 4}
          onClick={() => void send()}
          className="mt-3 min-h-11 w-full rounded-xl bg-primary font-semibold text-primary-ink disabled:opacity-50"
        >
          {busy ? "يجيب…" : "اسأل"}
        </button>
      </Card>
      {err && <p className="text-sm text-primary">{err}</p>}
      {answer && (
        <Card>
          <p className="whitespace-pre-wrap leading-7">{answer}</p>
        </Card>
      )}
    </div>
  );
}

function Khatma() {
  const juz = useHameed((s) => s.juz);
  const toggle = useHameed((s) => s.toggleJuz);
  const reset = useHameed((s) => s.resetKhatma);
  const goal = useHameed((s) => s.goal);
  const setGoal = useHameed((s) => s.setGoal);
  const openSurah = useHameed((s) => s.openSurah);
  const pct = khatmaPct(juz);
  const done = juz.filter(Boolean).length;
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <p className="text-sm text-muted">ختمة القرآن</p>
        <p className="text-4xl font-semibold text-primary">{pct}٪</p>
        <p className="text-sm text-muted">
          {done === 30 ? "أتممت الختمة. تقبّل الله." : `بقي ${30 - done} جزءاً`}
        </p>
        <label className="mt-3 block text-sm text-muted">
          هدف الصفحات اليومي: {goal}
          <input
            type="range"
            min={1}
            max={40}
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
        </label>
        <p className="mt-1 text-xs text-muted">٢٠ صفحة يومياً تختم المصحف في شهر تقريباً (٦٠٤ صفحة).</p>
      </Card>
      <div className="grid grid-cols-5 gap-2">
        {juz.map((on, i) => (
          <button
            key={i}
            type="button"
            onClick={() => toggle(i)}
            className={
              "flex min-h-16 flex-col items-center justify-center rounded-xl border text-sm " +
              (on ? "border-primary bg-primary text-primary-ink" : "border-border bg-surface")
            }
          >
            <span className="text-xs opacity-80">جزء</span>
            <span className="text-lg font-semibold">{i + 1}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-muted">اضغط الجزء عند إتمامه. اضغط مطوّلاً لا — افتح بداية الجزء من الأزرار التالية.</p>
      <div className="flex flex-wrap gap-2">
        {JUZ_STARTS.map((s, i) => (
          <button key={i} type="button" onClick={() => openSurah(s)} className="min-h-9 rounded-full bg-surface px-3 text-xs text-muted">
            {i + 1}: {SURAHS[s - 1]?.name}
          </button>
        ))}
      </div>
      <button type="button" onClick={reset} className="min-h-11 text-sm text-muted">
        بدء ختمة جديدة
      </button>
    </div>
  );
}

function Adhkar() {
  const [setName, setSetName] = useState<keyof typeof ADHKAR>("صباح");
  const [counts, setCounts] = useState<number[]>([]);
  const list = ADHKAR[setName];
  useEffect(() => setCounts(list.map(() => 0)), [setName]);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {(Object.keys(ADHKAR) as (keyof typeof ADHKAR)[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setSetName(k)}
            className={"min-h-11 flex-1 rounded-xl text-sm " + (setName === k ? "bg-primary text-primary-ink" : "bg-surface text-muted")}
          >
            {k}
          </button>
        ))}
      </div>
      {list.map((d, i) => (
        <DhikrCard
          key={setName + i}
          d={d}
          n={counts[i] ?? 0}
          onInc={() =>
            setCounts((c) => {
              const next = c.slice();
              next[i] = Math.min(d.count, (next[i] ?? 0) + 1);
              return next;
            })
          }
        />
      ))}
    </div>
  );
}

function DhikrCard({ d, n, onInc }: { d: Dhikr; n: number; onInc: () => void }) {
  const done = n >= d.count;
  return (
    <button
      type="button"
      onClick={onInc}
      className={"rounded-2xl border p-4 text-right " + (done ? "border-good bg-surface" : "border-border bg-surface")}
    >
      <p className="font-[family-name:var(--font-quran)] text-xl leading-9">{d.text}</p>
      <p className="mt-2 text-sm text-primary">
        {n} / {d.count}
        {d.note ? ` · ${d.note}` : ""}
        {done ? " · تم" : ""}
      </p>
    </button>
  );
}

function Qibla() {
  const [bearing, setBearing] = useState<number | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [msg, setMsg] = useState("نحدد موقعك…");

  useEffect(() => {
    const ok = (lat: number, lng: number, label: string) => {
      setBearing(norm(qiblaBearing(lat, lng)));
      setMsg(label);
    };
    if (!navigator.geolocation) {
      ok(26.4207, 50.0888, "الدمام — الموقع غير متاح");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => ok(p.coords.latitude, p.coords.longitude, "حسب موقعك"),
      () => ok(26.4207, 50.0888, "الدمام — لم يُسمح بالموقع"),
      { timeout: 5000 },
    );
  }, []);

  const askCompass = () => {
    const DO = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    const start = () => {
      const on = (e: DeviceOrientationEvent) => {
        if (typeof e.webkitCompassHeading === "number") setHeading(e.webkitCompassHeading);
        else if (typeof e.alpha === "number") setHeading(norm(360 - e.alpha));
      };
      window.addEventListener("deviceorientation", on, true);
    };
    if (DO.requestPermission) {
      void DO.requestPermission().then((s) => {
        if (s === "granted") start();
      });
    } else start();
  };

  const delta = bearing != null && heading != null ? norm(bearing - heading) : bearing;

  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="w-full text-center">
        <p className="text-sm text-muted">{msg}</p>
        <p className="mt-1 text-3xl font-semibold text-primary">{bearing == null ? "—" : `${Math.round(bearing)}°`}</p>
        <p className="text-sm text-muted">اتجاه الكعبة من الشمال</p>
      </Card>
      <div className="relative grid size-64 place-items-center rounded-full border border-primary bg-surface">
        <div
          className="absolute inset-6 rounded-full border border-border"
          style={{ transform: `rotate(${delta ?? 0}deg)` }}
        >
          <div className="absolute top-0 left-1/2 h-1/2 w-1 -translate-x-1/2 rounded-full bg-primary" />
        </div>
        <span className="text-sm text-primary">الكعبة</span>
      </div>
      <button type="button" onClick={askCompass} className="min-h-11 rounded-xl bg-primary px-5 font-semibold text-primary-ink">
        تفعيل البوصلة
      </button>
      <p className="px-4 text-center text-xs text-muted">
        على الآيفون اضغط «تفعيل البوصلة» واسمح بالحركة. إن لم تتوفر البوصلة، اتجه حسب الدرجة من الشمال.
      </p>
    </div>
  );
}

declare global {
  interface DeviceOrientationEvent {
    webkitCompassHeading?: number;
  }
}
