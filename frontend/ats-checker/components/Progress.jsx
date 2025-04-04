import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import './ResumeUploader.css';

const Progress = React.forwardRef(({ value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className="progress-root" {...props}>
    <ProgressPrimitive.Indicator
      className="progress-indicator"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";

export { Progress };
