import React from "react";
import { Anchor } from "lucide-react";
import type { GameClass } from "../../types/class";

export const hunter: GameClass = {
  key: "hunter",
  name: "Hunter",
  short: "Daytime scout & ranged pressure — controls wolves, kites elites, and finds children fast.",
  icon: React.createElement(Anchor, { className: "h-5 w-5" }),
  perks: [
    { level: 1, text: "Route discipline: sweep in arcs and avoid re-checking cleared ground." },
    { level: 2, text: "Kite packs into traps or light; don’t duel in darkness." },
    { level: 3, text: "Tag tough enemies to pull them into the team’s killbox." },
  ],
  bestAt: [
    "Early-wolf control and thinning patrols before nightfall.",
    "Rapid child location to reduce required nights.",
    "Pulling aggro safely toward the camp.",
  ],
  hotspots: [
    { name: "Forest Edges", notes: "Good sight lines for ranged pulls and kiting." },
    { name: "Path Intersections", notes: "Mark found children and hazards for the team." },
  ],
  loop: [
    "Morning: Fast scout loops; mark points of interest.",
    "Midday: Help carry key finds back to base (ammo, heals).",
    "Afternoon: Escort returns; set up the first pull path for night.",
    "Night: Ranged peel on targets that jump the backline; kite to traps.",
  ],
  synergy: [
    { with: "Medic", how: "Safe pokes + reliable heals allow extended kites." },
    { with: "Builder/Support", how: "Pre-built traps make every pull efficient." },
    { with: "Fishman", how: "Food/ammo buffer means longer scouting windows." },
  ],
  proTips: [
    "Never overextend at dusk—arrive early to set pulls near camp.",
    "Mark dead-ends so the team doesn’t lose time.",
    "Fight near light; darkness amplifies mistakes.",
  ],
};

