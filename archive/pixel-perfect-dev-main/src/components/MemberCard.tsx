interface MemberCardProps {
  name: string;
  lines: string[];
}

export default function MemberCard({ name, lines }: MemberCardProps) {
  return (
    <div className="info-card animate-fade-in group">
      <div className="flex items-start gap-3">
        <div className="h-10 w-1 bg-gradient-gold rounded-full shrink-0 mt-1" />
        <div className="flex-1">
          <h4>{name}</h4>
          {lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
