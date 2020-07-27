export function DISPLAY_DATE(input) {
  try {
    return new Intl.DateTimeFormat('en-US',
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(new Date(input));
  } catch (_) {
    return null;
  }
}

export const DEFAULT_ALIGN = { x: 'start', y: 'end' };

export function ALIGNMENT(align) {
  switch (align) {
  case "justify":
  case "center":
  case "centered":
    return "center";
  case "end":
  case "right":
  case "bottom":
    return "flex-end";
  case "left":
  case "start":
  case "top":
    return "flex-start";
  default:
    return undefined;
  }
}
