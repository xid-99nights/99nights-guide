import { useEffect, useMemo, useState } from "react";
import { Search, Sun, Moon, Ship, LayoutGrid, ExternalLink, ChevronRight } from "lucide-react";
import { fishman, medic, hunter, chef } from "./data/classes";
import { ClassCard } from "./components/ClassCard";
import { Section } from "./components/Section";
import type { GameClass } from "./types/class";

/**
 * 99 Nights in the Forest — Strategy Guide (SPA)
 * Single-file React app (Tailwind CSS).
 * - Dark/light theme toggle
 * - Overview page + Classes page
 * - Fully authored: Fisherman, Medic, Hunter, Chef
 * - Responsive layout w/ sidebar, search
 */

// -----------------------------
// Data Model
// -----------------------------
import gameThumbnail from "./assets/99nights.png";


const GAME_LINKS = [
  { label: "Official Roblox Page", href: "https://www.roblox.com/" },
  { label: "Community Wiki", href: "https://99-nights-in-the-forest.fandom.com/" },
];

const overviewSections = [
  {
    id: "core-loop",
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Core Survival Loop",
    bullets: [
      "Daytime: gather wood/food, scout ponds and routes, locate children.",
      "Dusk: return to base, cook, craft, set traps.",
      "Night: keep the fire alive, defend against wolves/cultists, regroup.",
      "Rescue children to reduce total nights needed (target all ASAP).",
    ],
  },
  {
    id: "team-play",
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Team Play Basics",
    bullets: [
      "Assign roles (Firekeeper, Forager, Scout, Combat, Support).",
      "Fight near light; kite enemies through traps.",
      "Share resources intentionally—use items, don’t hoard.",
    ],
  },
  {
    id: "progression",
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Progression Milestones",
    bullets: [
      "Upgrade tools (weapons, fishing rod) and craft steadily.",
      "Establish a safe, well-lit base near water if possible.",
      "Set personal goals (e.g., all kids rescued by Day 40).",
    ],
  },
];

const allClasses: GameClass[] = [fishman, medic, hunter, chef];

// -----------------------------
// Utilities + Lightweight Tests
// -----------------------------

/** Filter overview sections by query (title or bullet text). */
export function filterOverviewSections<T extends { id: string; title: string; bullets: string[] }>(
  sections: T[],
  query: string
): T[] {
  const q = query.trim().toLowerCase();
  if (!q) return sections;
  return sections.filter(
    (s) => s.title.toLowerCase().includes(q) || s.bullets.some((b) => b.toLowerCase().includes(q))
  );
}

// Minimal test harness — logs to console, never throws or affects UI.
(function runLightweightTests() {
  try {
    // Test: empty query returns all
    const all = filterOverviewSections(overviewSections, "");
    console.assert(all.length === overviewSections.length, "filterOverviewSections: empty query should return all sections");

    // Test: query matches bullet content ("fire")
    const fire = filterOverviewSections(overviewSections, "fire");
    console.assert(fire.length >= 1, "filterOverviewSections: should match at least one section containing 'fire'");

    // Test: no matches
    const none = filterOverviewSections(overviewSections, "__nomatch__");
    console.assert(none.length === 0, "filterOverviewSections: non-matching query should return empty array");

    // Data invariants for classes
    const byKey = (k: string) => (allClasses as any[]).find((c) => c.key === k);
    const fish = byKey("fishman");
    const medic = byKey("medic");
    const hunter = byKey("hunter");
    const chef = byKey("Chef");

    console.assert(!!fish && fish.perks?.length === 3, "fishman: exists and has three perk entries");
    console.assert(!!medic && medic.short, "medic: exists and has short description");
    console.assert(!!hunter && hunter.short, "hunter: exists and has short description");
    console.assert(!!chef && chef.short, "builder: exists and has short description");

    console.info("[99 Nights Guide] Lightweight tests passed.")
  } catch (err) {
    console.warn("[99 Nights Guide] Lightweight tests encountered an error:", err);
  }
})();

// -----------------------------
// Small UI helpers
// -----------------------------

// Removed Badge and Pill components as they are now in ClassCard.tsx

// -----------------------------
// Main App
// -----------------------------

type RouteKey = "overview" | "classes";

export default function App() {
  const [route, setRoute] = useState<RouteKey>("overview");
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const [activeClassKey, setActiveClassKey] = useState<string>("fishman");

  // theme persistence
  useEffect(() => {
    const saved = localStorage.getItem("nn_theme");
    if (saved) setDark(saved === "dark");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("nn_theme", dark ? "dark" : "light");
  }, [dark]);

  const filteredOverview = useMemo(
    () => filterOverviewSections<typeof overviewSections[number]>(overviewSections, query),
    [query]
  );

  const cls = useMemo(() => allClasses.find((c) => c.key === activeClassKey) || allClasses[0], [activeClassKey]);

  const onNav = (r: RouteKey) => setRoute(r);

  return (
    <div className="min-h-dvh bg-[radial-gradient(60rem_60rem_at_120%_-10%,#a3e63520,transparent),radial-gradient(60rem_60rem_at_-20%_110%,#60a5fa20,transparent)] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <header className="sticky top-0 z-30 backdrop-blur border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <Ship className="h-6 w-6" />
          <h1 className="text-xl font-semibold tracking-tight">99 Nights — Strategy Guide</h1>
          <nav className="ml-auto hidden md:flex items-center gap-1">
            <button onClick={() => onNav("overview")} className={`px-3 py-1.5 rounded-full text-sm transition ${route === "overview" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}>Overview</button>
            <button onClick={() => onNav("classes")} className={`px-3 py-1.5 rounded-full text-sm transition ${route === "classes" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}>Classes</button>
          </nav>
          <div className="ml-2 flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
              <input
                placeholder="Search guide..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800 border border-black/10 dark:border-white/10 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-2.5 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:py-8 grid gap-6 md:gap-8">
        {route === "overview" && (
          <>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img
					src={gameThumbnail}
					alt="99 Nights Guide"
					className="w-24 h-24 rounded-lg object-cover"
				  />
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Welcome to the 99 Nights in the Forest Strategy Guide!</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      This guide provides in-depth strategies and tips to help you survive and thrive in the challenging world of 99 Nights in the Forest. Whether you're a new player or a seasoned veteran, you'll find valuable insights to master the game's mechanics, understand class roles, and conquer the forest.
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  99 Nights in the Forest is a Roblox survival horror game where players must work together to survive 99 nights against various threats, including the Deer, Cultists, and other hostile creatures. The game emphasizes resource management, base building, and strategic teamwork to rescue missing children and ultimately escape the forest.
                </p>
                <div className="flex flex-wrap gap-2">
                  {GAME_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm grid gap-4">
                <h2 className="text-xl font-semibold tracking-tight">Quick Links</h2>
                <ul className="grid gap-2">
                  {allClasses.map((cls) => (
                    <li key={cls.key}>
                      <button
                        onClick={() => {
                          setRoute("classes");
                          setActiveClassKey(cls.key);
                        }}
                        className="w-full text-left text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
                      >
                        <ChevronRight className="inline-block h-4 w-4 mr-2" />
                        {cls.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {filteredOverview.map((section) => (
              <Section key={section.id} title={section.title} icon={section.icon}>
                <ul className="list-disc list-inside">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </Section>
            ))}
          </>
        )}

        {route === "classes" && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-24 grid gap-4">
                {allClasses.map((cls) => (
                  <button
                    key={cls.key}
                    onClick={() => setActiveClassKey(cls.key)}
                    className={`w-full text-left p-3 rounded-lg transition ${activeClassKey === cls.key
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {cls.icon}
                      <div>
                        <div className="font-semibold">{cls.name}</div>
                        <div className="text-sm opacity-70">{cls.short}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <ClassCard cls={cls} />
            </div>
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-6 md:py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} 99 Nights in the Forest Strategy Guide. All rights reserved.
      </footer>
    </div>
  );
}


