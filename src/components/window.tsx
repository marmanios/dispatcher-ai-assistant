import { cn } from "@/utils";
import { Circle, EllipsisVertical, ShieldCheck } from "lucide-react";

type props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  shield?: boolean;
  circle: "red" | "green" | "blue";
};

function Window({ title, children, className, shield, circle }: props) {
  return (
    <div className={cn("border rounded ", className)}>
      <div className="relative z-10 bg-card px-2 py-1 border-b flex items-center">
        <h2 className="font-light uppercase">{title}</h2>
        <div className="ml-auto flex">
          <Circle
            strokeWidth={0.7}
            size={18}
            className={cn(
              circle === "red" && "text-destructive",
              circle === "green" && "text-green-500",
              circle === "blue" && "text-blue-500"
            )}
          />
          {shield && (
            <ShieldCheck className="ml-1.5" strokeWidth={0.7} size={18} />
          )}
          <EllipsisVertical strokeWidth={0.7} size={18} />
        </div>
      </div>
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
}

export default Window;
