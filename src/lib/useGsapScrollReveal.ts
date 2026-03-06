"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  sectionRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
  y?: number;
  duration?: number;
  start?: string;
};

export const useGsapScrollReveal = ({
  sectionRef,
  contentRef,
  y = 50,
  duration = 0.9,
  start = "top 80%",
}: Props) => {
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: start,
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, contentRef, y, duration, start]);
};
