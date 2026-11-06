"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.48, ease: "easeOut" }}>{children}</motion.div>;
}
