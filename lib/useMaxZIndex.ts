import { useThreads } from "@/liveblocks.config";
import { useMemo } from "react";

// Returns the highest z-index of all threads
export const useMaxZIndex = () => {
  // get all threads
  const { threads } = useThreads();

  // calculate the max z-index
  return useMemo(() => {
    let max = 0;
    for (const thread of threads) {
      if (thread.metadata.zIndex > max) {
        max = thread.metadata.zIndex;
      }
    }
    return max;
  }, [threads]);
};
