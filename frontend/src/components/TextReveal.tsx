"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
  stagger = 0.06,
  as: Tag = "span",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once, amount: 0.3 });
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement & HTMLDivElement>}
      className={`inline-flex flex-wrap ${className}`}
      style={{ gap: "0 0.28em" }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-[1.15]">
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0, rotateX: 20 }}
            animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
