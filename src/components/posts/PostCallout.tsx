import { InfoIcon } from "lucide-react";

export function PostCallout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-l-4 border-blue-500 bg-card p-4 flex gap-4 text-muted-foreground">
        <InfoIcon className="text-blue-500 shrink-0" />
        {children}
      </div>
    </>
  );
}
