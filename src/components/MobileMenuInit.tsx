"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Closes the mobile menu on route changes after App Router navigation. */
export function MobileMenuInit() {
  const pathname = usePathname();

  useEffect(() => {
    const btn = document.querySelector(".menu-btn");
    const mnav = document.getElementById("mnav");
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }
    if (mnav) {
      mnav.setAttribute("hidden", "");
      mnav.hidden = true;
    }
    document.body.classList.remove("menu-open");
  }, [pathname]);

  return null;
}
