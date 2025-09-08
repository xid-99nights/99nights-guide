import React from "react";
import { Fish } from "lucide-react";
import type { GameClass } from "../../types/class";

export const fishman: GameClass = {
  key: "fishman",
  name: "Fishman (Fisherman)",
  short: "Food engine & loot fisher — sustain the camp while supplying meds, ammo, and rare items.",
  icon: React.createElement(Fish, { className: "h-5 w-5" }),
  cost: "~50 Diamonds (Daily Class Shop)",
  starter: "Fishing Rod (no need to craft one).",
  perks: [
    { level: 1, text: "Rod gains XP quickly; level up via catches." },
    { level: 2, text: "Instant cast + longer casting distance (safer fishing)." },
    { level: 3, text: "Faster fish attraction; shorter wait between bites." },
  ],
  bestAt: [
    "Reliable food supply without venturing far.",
    "Steady medkits, bandages, ammo, and scrap via fishing loot table.",
    "Diamond bonus once per run (type \"yay fishing\" during the minigame).",
  ],
  hotspots: [
    { name: "Fresh Pond (Early)", notes: "Quick XP on basic fish; safe opening route." },
    { name: "Algal/Bone Ponds (Mid)", notes: "Access higher-tier fish and rare loot (meds, gems)." },
    { name: "Cold Pond", notes: "Char, Eel — variety for cooking and quests." },
    { name: "Frog Pond (Late)", notes: "Chance at unique boots/poison items; scout with backup." },
  ],
  loop: [
    "Morning: Sprint to nearest pond with ripples/swirl, start leveling rod.",
    "Midday: Shuttle food + meds back to camp; top off firewood.",
    "Afternoon: Upgrade rod if possible; rotate ponds for variety and loot.",
    "Dusk: Return to base early; cook, craft, and set traps.",
    "Night: Fish from camp-adjacent water if safe; otherwise defend and heal.",
  ],
  synergy: [
    { with: "Cook", how: "Cooked fish gives better regen/satiation." },
    { with: "Scavenger", how: "Carry more fish/loot in fewer trips." },
    { with: "Medic", how: "Turn surplus bandages/medkits into team confidence for night pushes." },
  ],
  proTips: [
    "Fish at ripple/swirl spots for faster bites; reposition if dry.",
    "Jellyfish can be eaten raw for a safe speed boost (no damage).",
    "Fight from the bank: Level 2 range lets you fish outside aggro paths.",
    "Mark ponds mentally/with notes to avoid backtracking.",
    "Build a perimeter of traps near shoreline approaches to your base.",
  ],
};

