import React from "react";
import { Wrench } from "lucide-react";
import type { GameClass } from "../../types/class";

export const builder: GameClass = {
  key: "builder",
  name: "Builder/Support",
  short: "Base engineer — sets trap arcs, chokepoints, and keeps the fire stocked.",
  icon: React.createElement(Wrench, { className: "h-5 w-5" }),
  perks: [
    { level: 1, text: "Learn enemy paths; place traps where they actually walk, not where it looks neat." },
    { level: 2, text: "Semi-circle trap arcs in front of light; leave a clear teammate lane." },
    { level: 3, text: "Layered defense: outer slows + inner damage near the fire." },
  ],
  bestAt: [
    "Turning the camp into a safe DPS zone.",
    "Converting wood into real survivability (traps > stockpiles when pressured).",
    "Scaling defense beyond Night 99 with efficient layouts.",
  ],
  hotspots: [
    { name: "Choke Points", notes: "Narrow paths into camp that funnel enemies into traps." },
    { name: "Shoreline Approaches", notes: "Protect pond-sides if your base is water-adjacent." },
  ],
  loop: [
    "Morning: Wood run and plan upgrades.",
    "Midday: Lay first trap line; test pulls with Hunter.",
    "Afternoon: Reinforce inner ring; ensure firewood buffer.",
    "Night: Repair/replace after waves; call out safe lanes.",
  ],
  synergy: [
    { with: "Medic", how: "Safe zones make heals uninterrupted." },
    { with: "Hunter", how: "Predictable pulls into your trap arcs = free damage." },
    { with: "Fishman", how: "Food + materials streamlines all building windows." },
  ],
  proTips: [
    "Avoid trap clutter: teammates need lanes to move/peel.",
    "Prioritize sight lines—build where torches and the fire illuminate.",
    "Always return before dusk to finish placements in light.",
  ],
};

