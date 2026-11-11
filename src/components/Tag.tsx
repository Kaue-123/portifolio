export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-lg border border-line bg-surface-2 px-2.5 py-[5px] text-[13px] text-text-chip">
      {children}
    </li>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}

export function StatusChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-purple-chip px-2.5 py-[5px] text-xs font-medium text-purple-chip-text">
      {children}
    </span>
  );
}
