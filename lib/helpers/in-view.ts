import { useCallback, useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>() {
  const ref = useRef<(T | null)[]>([]);
  const rootRef = useRef<T>(null);
  const [visibleElements, setVisibleElements] = useState<T[]>([]);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const inArray = visibleElements.find((e) => e === entry.target);

        if (!entry.isIntersecting && inArray) {
          setVisibleElements((prev) => prev.filter((e) => e !== entry.target));
          return;
        }

        if (entry.isIntersecting && !inArray) {
          setVisibleElements((prev) => [...prev, entry.target as T]);
        }
      });
    },
    [visibleElements]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: rootRef.current,
    });

    ref.current.forEach((r) => {
      if (r) {
        observer.observe(r);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [ref, observerCallback]);

  return { ref, visibleElements, rootRef };
}
