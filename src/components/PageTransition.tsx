"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const BAR_COUNT = 5;
const STAGGER = 0.09;
const DURATION = 0.55;
const EASE = [0.76, 0, 0.24, 1] as const;

// Bars sit off-screen below (y: 100%) when idle. Exit rises up to cover
// the screen (bottom -> top), then the entering page's bars sink back
// down out of view to reveal it, staying below for the next transition.
const barVariants: Variants = {
  initial: { y: "0%" },
  animate: (i: number) => ({
    y: "100%",
    transition: { duration: DURATION, delay: i * STAGGER, ease: EASE },
  }),
  exit: (i: number) => ({
    y: "0%",
    transition: { duration: DURATION, delay: (BAR_COUNT - 1 - i) * STAGGER, ease: EASE },
  }),
};

function HashScrollHandler() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }, []);

  return null;
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-1 flex-col"
      >
        {children}
        <HashScrollHandler />

        <div className="pointer-events-none fixed inset-0 z-[100] flex">
          {Array.from({ length: BAR_COUNT }).map((_, i) => (
            <motion.div key={i} custom={i} variants={barVariants} className="h-full w-1/5 bg-black" />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
