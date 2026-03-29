import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6",
        hover &&
          "hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default",
        gradient &&
          "bg-gradient-to-br from-white/[0.05] to-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
