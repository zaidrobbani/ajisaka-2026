import { useState, useEffect } from "react";

function getBreakpoint() {
  const w = window.innerWidth;
  if (w >= 1536) return "2xl";
  if (w >= 1280) return "xl";
  if (w >= 1024) return "lg";
  if (w >= 768) return "md";
  if (w >= 640) return "sm";
  return "xs";
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<string>(() => {
    if (typeof window === "undefined") return "xs";
    return getBreakpoint();
  });

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}