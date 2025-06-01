import Typography from "../Typography/Typography";
import "./ProgressBar.css";

type ProgressValue = {
  value: number;
  display: string;
};

type ProgressItem = {
  label?: string;
  before: ProgressValue;
  after: ProgressValue;
};

type ProgressBarProps = {
  title?: string;
  items: ProgressItem[];
};

export const ProgressBar = ({ title, items }: ProgressBarProps) => {
  return (
    <section
      className="progress-wrapper"
      aria-label={title || "Progress comparison"}
    >
      {title && (
        <Typography variant="h2" className="progress-title">
          {title}
        </Typography>
      )}

      {items.map((item, index) => {
        const total = item.before.value + item.after.value || 1;
        const beforePct = (item.before.value / total) * 100;
        const afterPct = (item.after.value / total) * 100;
        const labelId = `progress-label-${index}`;
        const delta = item.after.value - item.before.value;

        return (
          <div className="progress-group" key={index}>
            {item.label && (
              <Typography
                id={labelId}
                variant="h5"
                className="progress-description"
              >
                {item.label}
              </Typography>
            )}
            <div
              className="progress-root"
              role="group"
              aria-labelledby={labelId}
            >
              <div
                className="segment before"
                style={{ width: `${beforePct}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={item.before.value}
                aria-label="Before value"
              >
                <Typography variant="body" className="progress-text-before">
                  Before: {item.before.display}
                </Typography>
              </div>

              <div
                className="segment after"
                style={{ width: `${afterPct}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={item.after.value}
                aria-label="After value"
              >
                <Typography variant="body" className="progress-text">
                  After: {item.after.display}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
