// LoadingSkeleton.tsx
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const detailSkeleton = () => (
    <div className="mt-28 ml-8 w-full h-full flex flex-row justify-start">
      <Skeleton className="h-[550px] w-[375px] rounded-xl ml-6" />
      <div className="flex flex-col mx-14">
        <Skeleton className="h-20 w-[500px] mb-6"/>
        <Skeleton className="h-4 w-[500px]"/>
      </div>
    </div>
);

export default detailSkeleton;