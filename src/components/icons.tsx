type IconProps = { size?: number; stroke?: string; strokeWidth?: number };

const base = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRight({ size = 18, stroke = "currentColor", strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUp({ size = 15, stroke = "currentColor", strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function Instagram({ size = 18, stroke = "currentColor", strokeWidth = 1.8 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

export function Chat({ size = 18, stroke = "currentColor", strokeWidth = 1.8 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.1A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

export function Person({ size = 26, stroke = "currentColor", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5" />
    </svg>
  );
}

export function Shield({ size = 26, stroke = "currentColor", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M12 3.5l7 3v5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9v-5l7-3Z" />
    </svg>
  );
}

export function Trend({ size = 26, stroke = "currentColor", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M4 19l5-5 3.5 3.5L20 9" />
      <path d="M14.5 9H20v5.5" />
    </svg>
  );
}

export function Pin({ size = 26, stroke = "currentColor", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={strokeWidth} {...base}>
      <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  );
}

export function Plus({ size = 22 }: IconProps) {
  return (
    <svg className="plus" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3} {...base}>
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export function SwipeArrow() {
  return (
    <svg width="34" height="12" viewBox="0 0 34 12" stroke="currentColor" strokeWidth={1.3} {...base}>
      <path d="M1 6h32M28 1l5 5-5 5" />
    </svg>
  );
}

export function VMark() {
  return (
    <svg width="44" height="22" viewBox="0 0 44 22" fill="none" stroke="var(--accent)" strokeWidth={1.3} aria-hidden="true">
      <path d="M1 1l21 19L43 1" />
    </svg>
  );
}
