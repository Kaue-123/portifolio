export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded border border-line bg-surface-2 px-2.5 py-1 text-xs text-text-muted">
      {children}
    </li>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
