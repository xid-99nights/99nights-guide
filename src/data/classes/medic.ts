import React from "react";
import { Shield } from "lucide-react";
import type { GameClass } from "../../types/class";

export const medic: GameClass = {
  key: "medic",
  name: "Medic",
  short: "Team sustain lead — keeps everyone alive during night defenses and long rescues.",
  icon: React.createElement(Shield, { className: "h-5 w-5" }),
  perks: [
    { level: 1, text: "Prioritize bandages/medkits; manage health bars proactively (don’t overheal)." },
    { level: 2, text: "Positioning discipline: stand slightly behind frontliners and near light." },
    { level: 3, text: "Triage flow: stabilize → top-up → rotate to safety; call targets for peel." },
  ],
  bestAt: [
    "Stabilizing the team during high-pressure waves.",
    "Conserving resources by topping off early rather than spamming heals late.",
    "Coordinating retreats to the campfire when things snowball.",
  ],
  hotspots: [
    { name: "Camp Perimeter", notes: "Fight near light for visibility and safer revives." },
    { name: "Trap Lines", notes: "Heal from behind trap arcs while enemies slow/bleed." },
  ],
  loop: [
    "Morning: Craft/collect healing items; confirm everyone carries a fallback heal.",
    "Midday: Escort scouts on risky routes; mark safe fallback paths.",
    "Afternoon: Stockpile near the fire; pre-assign who you’ll peel for at night.",
    "Night: Call focus targets; heal earliest chip damage to avoid burst deaths.",
  ],
  synergy: [
    { with: "Builder/Support", how: "Traps reduce incoming pressure, making heals efficient." },
    { with: "Hunter", how: "Staggered enemies are easier to keep off teammates during heals." },
    { with: "Fishman", how: "Reliable bandage/medkit drops from fishing fuel constant uptime." },
  ],
  proTips: [
    "Track lowest *future* HP (who’s about to be hit), not just current bars.",
    "Heal near the fire for extra safety and vision.",
    "Carry a melee to interrupt threats that slip past the line.",
  ],
};

