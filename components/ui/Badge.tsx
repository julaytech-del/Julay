import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "purple" | "cyan" | "green";
  className?: string;
}

const variants = {
  default: "bg-white/8 text-zinc-300 border-white/10",
  purple: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  green: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
