"use client";

import { useState } from "react";
import { faqs } from "@/data/home";

/** Список FAQ: единственная часть главной, которой нужно состояние на клиенте. */
export function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="faq-list" data-reveal data-reveal-delay="1">
      {faqs.map((faq, index) => {
        const open = openFaq === index;
        return (
          <div className={`faq-item ${open ? "is-open" : ""}`} key={faq.question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={open}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenFaq(open ? null : index)}
            >
              <span>{faq.question}</span>
              <strong aria-hidden="true">+</strong>
            </button>

            <div id={`faq-answer-${index}`} className="faq-answer" role="region">
              <div>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
