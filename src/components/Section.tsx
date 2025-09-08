import React from "react";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function Section({ title, icon, children }: SectionProps) {
  return (
    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-neutral-700 dark:text-neutral-200">{icon}</div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </div>
    </section>
  );
}

