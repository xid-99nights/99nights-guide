import React from "react";
import { ChefHat } from "lucide-react";
import type { GameClass } from "../../types/class";

export const chef: GameClass = {
  key: "chef",
  name: "Chef",
  short: "Culinary support specialist — provides powerful food buffs and sustains the team with enhanced meals.",
  icon: React.createElement(ChefHat, { className: "h-5 w-5" }),
  cost: "150 Diamonds (Daily Class Shop)",
  starter: "Chef's Station Blueprint and Recipe Book.",
  perks: [
    { level: 1, text: "Can cook unique recipes that give huge bonuses. All cooked items are seasoned." },
    { level: 2, text: "Unlocks a new recipe." },
    { level: 3, text: "Unlocks an additional new recipe." },
  ],
  bestAt: [
    "Providing powerful, unique food buffs to teammates.",
    "Managing team hunger consistently and efficiently.",
    "Extending the duration and potency of food effects.",
    "Essential support for long survival runs and sustained operations.",
  ],
  hotspots: [
    { name: "Base Kitchen", notes: "Central Chef's Station for safe cooking and meal distribution." },
    { name: "Resource Nodes", notes: "Areas with abundant food ingredients for recipe materials." },
    { name: "Forward Operating Bases", notes: "Temporary cooking stations for extended expeditions." },
  ],
  loop: [
    "Morning: Gather ingredients and assess team's food needs for the day.",
    "Midday: Cook meals based on planned activities (combat buffs for raids, sustain for defense).",
    "Afternoon: Prepare emergency rations and high-tier recipes for night challenges.",
    "Night: Distribute meals to defenders and maintain food supply during base defense.",
  ],
  synergy: [
    { with: "Farmer", how: "Provides constant supply of raw food ingredients for cooking." },
    { with: "Scavenger", how: "Finds rare ingredients needed for advanced Chef recipes." },
    { with: "Combat Classes", how: "Enhances their effectiveness with damage and health buffs." },
    { with: "Builder/Support", how: "Protects Chef's Station and creates secure cooking areas." },
  ],
  proTips: [
    "Pre-cook high-buff meals before major raids or expeditions.",
    "Place Chef's Station in secure, centralized location within base.",
    "Save rare ingredients for high-tier recipes that provide critical buffs.",
    "Communicate with team about ingredient needs and available meal buffs.",
    "Keep emergency rations stocked for critical hunger/health situations.",
    "Master all recipes in your Recipe Book to discover situational advantages.",
    "Focus on meals that address team's immediate needs (healing vs combat buffs).",
    "Coordinate with resource gatherers to ensure steady ingredient supply.",
  ],
};