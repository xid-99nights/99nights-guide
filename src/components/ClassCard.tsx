import type { GameClass } from "../types/class";
import { Section } from "./Section";
import { Flame, Compass, Swords, ExternalLink, ChevronRight } from "lucide-react";

interface ClassCardProps {
  cls: GameClass;
}

export function ClassCard({ cls }: ClassCardProps) {
  return (
    <div className="grid gap-6">
      <Section title="Overview" icon={cls.icon}>
        <p>{cls.short}</p>
        {cls.cost && cls.starter && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <strong>Cost:</strong> {cls.cost}
            </div>
            <div>
              <strong>Starter:</strong> {cls.starter}
            </div>
          </div>
        )}
      </Section>

      <Section title="Perks" icon={<Flame className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.perks.map((p) => (
            <li key={p.level}>
              <strong>Level {p.level}:</strong> {p.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Best At" icon={<Compass className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.bestAt.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Section>

      <Section title="Hotspots" icon={<ExternalLink className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.hotspots.map((h, i) => (
            <li key={i}>
              <strong>{h.name}:</strong> {h.notes}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Loop" icon={<ChevronRight className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.loop.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </Section>

      <Section title="Synergies" icon={<Swords className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.synergy.map((s, i) => (
            <li key={i}>
              <strong>{s.with}:</strong> {s.how}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Pro Tips" icon={<Flame className="h-5 w-5" />}>
        <ul className="list-disc list-inside">
          {cls.proTips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

