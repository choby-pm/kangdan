"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const BAR_COUNT = 5;
const STAGGER = 0.05;
const DURATION = 0.35;
const EASE = [0.76, 0, 0.24, 1] as const;

const barVariants: Variants = {
  initial: { y: "0%" },
  animate: (i: number) => ({
    y: "-100%",
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
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit">
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
