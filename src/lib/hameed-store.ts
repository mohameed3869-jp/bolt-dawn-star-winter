import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Tab = "today" | "quran" | "khatma" | "adhkar" | "duas" | "zakat" | "ask" | "qibla";

type State = {
  tab: Tab;
  setTab: (t: Tab) => void;
  surah: number | null;
  openSurah: (n: number) => void;
  closeSurah: () => void;
  juz: boolean[];
  toggleJuz: (i: number) => void;
  resetKhatma: () => void;
  goal: number;
  setGoal: (n: number) => void;
  pagesToday: number;
  lastDay: string;
  streak: number;
  addPages: (n: number) => void;
  bookmarks: number[];
  toggleBookmark: (n: number) => void;
  tasbih: number;
  bumpTasbih: () => void;
  resetTasbih: () => void;
};

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export const useHameed = create<State>()(
  persist(
    (set, get) => ({
      tab: "today",
      setTab: (tab) => set({ tab }),
      surah: null,
      openSurah: (n) => set({ surah: n, tab: "quran" }),
      closeSurah: () => set({ surah: null }),
      juz: Array(30).fill(false),
      toggleJuz: (i) =>
        set((s) => {
          const juz = s.juz.slice();
          juz[i] = !juz[i];
          return { juz };
        }),
      resetKhatma: () => set({ juz: Array(30).fill(false) }),
      goal: 20,
      setGoal: (goal) => set({ goal }),
      pagesToday: 0,
      lastDay: todayKey(),
      streak: 0,
      addPages: (n) =>
        set((s) => {
          const day = todayKey();
          const base = s.lastDay === day ? s.pagesToday : 0;
          const pagesToday = Math.max(0, base + n);
          let streak = s.streak;
          if (base < s.goal && pagesToday >= s.goal) {
            streak = s.lastDay === yesterdayKey() ? s.streak + 1 : 1;
          }
          return { pagesToday, lastDay: day, streak };
        }),
      bookmarks: [],
      toggleBookmark: (n) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(n) ? s.bookmarks.filter((x) => x !== n) : [...s.bookmarks, n],
        })),
      tasbih: 0,
      bumpTasbih: () => set((s) => ({ tasbih: (s.tasbih + 1) % 100 })),
      resetTasbih: () => set({ tasbih: 0 }),
    }),
    {
      name: "hameed-v1",
      partialize: (s) => ({
        juz: s.juz,
        goal: s.goal,
        pagesToday: s.pagesToday,
        lastDay: s.lastDay,
        streak: s.streak,
        bookmarks: s.bookmarks,
        tasbih: s.tasbih,
      }),
    },
  ),
);

export function khatmaPct(juz: boolean[]) {
  const list = juz?.length ? juz : [];
  return Math.round((list.filter(Boolean).length / 30) * 100);
}

export function visiblePages(pagesToday: number, lastDay: string) {
  const d = new Date();
  const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  return lastDay === key ? pagesToday : 0;
}
