import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@cad-challenges-hub/ui";
import { CheckCircle2 } from "lucide-react";

type Props = {
  constraints?: string[];
  materials?: string[];
  tools?: string[];
  fileFormats?: string[];
  maxFiles?: number;
  maxFileSize?: number;
};

export default function RequirementsCard({
  constraints,
  materials,
  tools,
  fileFormats,
  maxFiles,
  maxFileSize,
}: Props) {
  const included: string[] = [
    ...(constraints || []),
    ...(materials ? materials.map((m) => `Material: ${m}`) : []),
    ...(tools ? tools.map((t) => `Tool: ${t}`) : []),
  ];

  return (
    <Card className="border-neutral-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">What’s included</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Checklist */}
        <ul className="space-y-3">
          {included.length > 0 ? (
            included.map((item, idx) => (
              <li key={`${item}-${idx}`} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))
          ) : (
            <li className="text-sm text-muted-foreground">
              No explicit requirements provided.
            </li>
          )}
        </ul>

        {/* Deliverables */}
        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium mb-3">Deliverables</p>
          <div className="flex flex-wrap gap-2">
            {fileFormats && fileFormats.length > 0 ? (
              fileFormats.map((fmt) => (
                <Badge key={fmt} variant="secondary" className="rounded-md">
                  {fmt}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">
                See challenge description for deliverables.
              </span>
            )}
          </div>
        </div>

        {/* Meta row like pricing/footer area */}
        <div className="border-t pt-4 text-sm text-muted-foreground flex flex-wrap gap-4">
          {typeof maxFiles === "number" ? (
            <span>Max files: {maxFiles}</span>
          ) : null}
          {typeof maxFileSize === "number" ? (
            <span>Max size: {maxFileSize} MB</span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
