"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/content";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-surface-100 border-y border-surface-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
            >
              <span className="font-display text-base font-medium text-navy-900 sm:text-[17px]">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="mt-3 pr-8 text-sm font-light leading-relaxed text-ink-600 sm:text-[15px]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
