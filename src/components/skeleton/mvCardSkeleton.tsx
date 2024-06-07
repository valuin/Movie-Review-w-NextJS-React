// MovieCardSkeleton.tsx
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const MovieCardSkeleton = () => (
  <div className="flex flex-col items-center mb-10">
    <Skeleton className="h-[375px] w-[255px] rounded-xl" />
    <Skeleton className="h-8 w-[250px] mt-4" />
  </div>
);

export default MovieCardSkeleton;