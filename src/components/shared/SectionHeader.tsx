import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("flex gap-2 mt-6", centered ? "justify-center" : "justify-start")}>
        <div className="w-12 h-1.5 rounded-full bg-primary" />
        <div className="w-6 h-1.5 rounded-full bg-secondary" />
        <div className="w-3 h-1.5 rounded-full bg-accent" />
      </div>
    </div>
  );
}
