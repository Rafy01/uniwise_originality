import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import "./ProgressBar.css";

type ProgressItem = {
  beforeLabel?: string;
  beforeValue: number;
  afterLabel?: string;
  afterValue: number;
};

type ProgressBarProps = {
  title?: string;
  items: ProgressItem[];
};

export const ProgressBar = ({ title, items }: ProgressBarProps) => {
  const [values, setValues] = useState<ProgressItem[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValues(items);
    }, 300);
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <section className="progress-wrapper">
      {title && <h3 className="progress-title">{title}</h3>}

      {values.map((item, index) => (
        <div className="progress-group" key={index}>
          <label className="progress-label">
            {item.beforeLabel || "Before"}
          </label>
          <Progress.Root className="progress-root" value={item.beforeValue}>
            <Progress.Indicator
              className="progress-indicator before"
              style={{ width: `${item.beforeValue}%` }}
            />
          </Progress.Root>
          <div className="progress-value">{item.beforeValue}%</div>

          <label className="progress-label">{item.afterLabel || "After"}</label>
          <Progress.Root className="progress-root" value={item.afterValue}>
            <Progress.Indicator
              className="progress-indicator after"
              style={{ width: `${item.afterValue}%` }}
            />
          </Progress.Root>
          <div className="progress-value">{item.afterValue}%</div>
        </div>
      ))}
    </section>
  );
};
