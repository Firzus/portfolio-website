import type { Transition, Variants } from "framer-motion";

const DEFAULT_EASE: Transition["ease"] = [0.25, 0.1, 0.25, 1];

const buildTransition = (
  overrides: Partial<Transition> & Pick<Transition, "delay" | "duration">
): Transition => ({
  type: "tween",
  ease: DEFAULT_EASE,
  ...overrides,
});

export const textVariant = (delay = 0): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export type Direction = "left" | "right" | "up" | "down" | "none";

export const fadeIn = (
  direction: Direction = "none",
  type: Transition["type"] = "spring",
  delay = 0,
  duration = 0.75
): Variants => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ...buildTransition({ delay, duration }),
        type,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: buildTransition({ delay, duration }),
  },
});

export const slideIn = (
  direction: Direction = "left",
  type: Transition["type"] = "tween",
  delay = 0,
  duration = 0.75
): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      ...buildTransition({ delay, duration }),
      type,
    },
  },
});

export const staggerContainer = (
  staggerChildren = 0.15,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
