import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export { dayjs };

dayjs.extend(utc);
dayjs.extend(timezone);

export const japanTimeZone = "Asia/Tokyo";

export function yearRange(start: Date, end: Date): string {
  if (start.getFullYear() === end.getFullYear()) {
    return start.getFullYear().toString();
  }

  return `${start.getFullYear()} – ${end.getFullYear()}`;
}
