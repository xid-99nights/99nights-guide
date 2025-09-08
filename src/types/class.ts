import React from "react";

export interface ClassPerk {
  level: number;
  text: string;
}

export interface ClassHotspot {
  name: string;
  notes: string;
}

export interface ClassSynergy {
  with: string;
  how: string;
}

export interface GameClass {
  key: string;
  name: string;
  short: string;
  icon: React.ReactNode;
  cost?: string;
  starter?: string;
  perks: ClassPerk[];
  bestAt: string[];
  hotspots: ClassHotspot[];
  loop: string[];
  synergy: ClassSynergy[];
  proTips: string[];
}

