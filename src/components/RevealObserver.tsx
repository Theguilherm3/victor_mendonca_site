"use client";

import { useEffect } from "react";

/**
 * Revela os elementos marcados com `data-reveal` ao entrarem na tela e
 * esconde o botão flutuante enquanto o hero ou o contato estão visíveis
 * (ali já existe um botão de WhatsApp maior).
 * Sem JS (ou com movimento reduzido), tudo aparece normalmente.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    // Botão flutuante
    const zones = document.querySelectorAll(".hero, #contato, .footer");
    const visible = new Set<Element>();
    const fabIo = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      root.classList.toggle("fab-hide", visible.size > 0);
    });
    zones.forEach((el) => fabIo.observe(el));
    cleanups.push(() => {
      fabIo.disconnect();
      root.classList.remove("fab-hide");
    });

    // Revelação ao rolar
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("rv");

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );

      document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
      cleanups.push(() => {
        io.disconnect();
        root.classList.remove("rv");
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
