import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging and deduplicating classes as needed.
 *
 * This function uses `clsx` to handle conditional class names and `tailwind-merge` to resolve conflicts and merge Tailwind CSS classes.
 * It's useful for creating dynamic class strings in React components, ensuring that class names are combined correctly and
 * Tailwind utility classes are merged without conflicts.
 *
 * @param {...ClassValue[]} inputs - A list of class names or conditional class names to be combined.
 * @returns {string} - A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a given date string into a human-readable format with the difference in days, weeks, months, or years from the current date.
 *
 * @param {string} date - The date string to be formatted.
 * @returns {string} - A formatted string representing the date and the time elapsed from the current date.
 */
export function formatWith(date: string) {
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  const DAYS_IN_A_WEEK = 7;
  const DAYS_IN_A_MONTH = 30;
  const DAYS_IN_A_YEAR = 365;

  let now = new Date();
  let target = new Date(date);

  if (isNaN(target.getTime())) {
    return "Invalid date";
  }

  if (!date.includes("T")) {
    target.setHours(0, 0, 0, 0);
  }

  let diff = Math.abs(now.getTime() - target.getTime());
  let days = Math.floor(diff / MILLISECONDS_IN_A_DAY);

  let full = target.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (days < 1) {
    return "Today";
  } else if (days < DAYS_IN_A_WEEK) {
    return `${full} (${days}d ago)`;
  } else if (days < DAYS_IN_A_MONTH) {
    const weeksAgo = Math.floor(days / DAYS_IN_A_WEEK);
    return `${full} (${weeksAgo}w ago)`;
  } else if (days < DAYS_IN_A_YEAR) {
    const monthsAgo = Math.floor(days / DAYS_IN_A_MONTH);
    return `${full} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(days / DAYS_IN_A_YEAR);
    return `${full} (${yearsAgo}y ago)`;
  }
}
