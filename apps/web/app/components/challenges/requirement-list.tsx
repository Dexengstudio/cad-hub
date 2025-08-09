import { Badge } from "@cad-challenges-hub/ui";

export function RequirementList({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="secondary" className="rounded-md">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
