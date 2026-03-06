"use client";

import React, { useMemo } from "react";
import { getPointStatus, type DateRange } from "../point/timelineStatus";

type TimelineEventTextProps = {
  periods: DateRange[];
  title: string;
  descriptionLines: string[];
  className: string;
};

const TimelineEventText: React.FC<TimelineEventTextProps> = ({
  periods,
  title,
  descriptionLines,
  className,
}) => {
  const status = useMemo(() => getPointStatus(periods), [periods]);
  const isPass = status === "pass";

  return (
    <div className={className}>
      <h3
        className={`text-white font-playfair font-semibold leading-tight ${isPass ? "opacity-50" : "opacity-100"}`}
        style={{ fontSize: "3cqi" }}
      >
        {title}
      </h3>
      <p
        className={`text-white font-montserrat tracking-wide leading-tight mt-[0.3em] ${isPass ? "opacity-50" : "opacity-100"}`}
        style={{ fontSize: "1.4cqi" }}
      >
        {descriptionLines.map((line, index) => (
          <React.Fragment key={`${title}-${index}`}>
            {line}
            {index < descriptionLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default TimelineEventText;
