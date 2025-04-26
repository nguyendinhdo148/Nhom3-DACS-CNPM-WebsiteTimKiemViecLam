import { Card } from "@/components/ui/card";
import clsx from "clsx";

// FancySkeleton component (shimmer style)
const FancySkeleton = ({
  className,
  rounded = true,
}: {
  className?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-gray-200",
        rounded && "rounded-xl",
        className
      )}
    >
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
};

// Add shimmer animation (Tailwind custom)
const shimmerStyle = `
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.animate-shimmer {
  animation: shimmer 1.5s infinite;
  background-size: 200% 100%;
}
`;

const DashboardSkeleton = () => (
  <>
    {/* Shimmer CSS */}
    <style>{shimmerStyle}</style>

    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <FancySkeleton className="h-10 w-64" />
        <FancySkeleton className="h-5 w-96" />
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-6 space-y-5">
            <FancySkeleton className="h-10 w-10" />
            <FancySkeleton className="h-4 w-28" />
            <FancySkeleton className="h-8 w-20" />
          </Card>
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <Card className="lg:col-span-2 p-6 space-y-4">
          <FancySkeleton className="h-8 w-48" />
          {Array.from({ length: 5 }).map((_, i) => (
            <FancySkeleton key={i} className="h-16 w-full" />
          ))}
        </Card>

        {/* Popular Jobs */}
        <Card className="p-6 space-y-4">
          <FancySkeleton className="h-8 w-48" />
          {Array.from({ length: 3 }).map((_, i) => (
            <FancySkeleton key={i} className="h-24 w-full" />
          ))}
        </Card>
      </div>
    </div>
  </>
);

export default DashboardSkeleton;
