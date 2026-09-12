"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const STAGGER = 0.08;
const DURATION = 0.6;
const EASE = [0.76, 0, 0.24, 1] as const;

function useBarCount() {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setCount(mql.matches ? 6 : 4);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return count;
}

function phaseDuration(barCount: number) {
  return DURATION + (barCount - 1) * STAGGER;
}

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  target?.scrollIntoView({ block: "start" });
}

const barVariants: Variants = {
  hidden: { y: "100%" },
  cover: (i: number) => ({
    y: "0%",
    transition: { duration: DURATION, delay: i * STAGGER, ease: EASE },
  }),
  reveal: (i: number) => ({
    y: "100%",
    transition: { duration: DURATION, delay: i * STAGGER, ease: EASE },
  }),
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const barCount = useBarCount();
  const [displayed, setDisplayed] = useState(children);
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setDisplayed(children);
      return;
    }

    setPhase("cover");
    const coverMs = phaseDuration(barCount) * 1000;

    const coverTimer = setTimeout(() => {
      setDisplayed(children);
      scrollToHash();
      setPhase("reveal");
    }, coverMs);

    return () => clearTimeout(coverTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Rightmost bar (highest index) animates first in both phases.
  const barCustom = (i: number) => barCount - 1 - i;

  return (
    <div className="flex flex-1 flex-col">
      {displayed}

      <div className="pointer-events-none fixed inset-0 z-[100] flex">
        {Array.from({ length: barCount }).map((_, i) => (
          <motion.div
            key={i}
            custom={barCustom(i)}
            variants={barVariants}
            initial="hidden"
            animate={phase === "cover" ? "cover" : phase === "reveal" ? "reveal" : "hidden"}
            className="h-full flex-1 bg-black"
          />
        ))}
      </div>
    </div>
  );
}
