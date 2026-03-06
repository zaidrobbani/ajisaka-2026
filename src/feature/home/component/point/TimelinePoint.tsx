"use client";

import React, { useMemo } from "react";
import Pass from "./Pass";
import Running from "./Running";
import Cooming from "./Cooming";
import { getPointStatus, type DateRange } from "./timelineStatus";

type TimelinePointProps = {
  periods: DateRange[];
};

const TimelinePoint: React.FC<TimelinePointProps> = ({ periods }) => {
  const status = useMemo(() => getPointStatus(periods), [periods]);

  if (status === "pass") {
    return <Pass />;
  }

  if (status === "running") {
    return <Running />;
  }

  return <Cooming />;
};

export default TimelinePoint;
