/** Build compact page number list with ellipsis for large page counts */
export function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 1) return [1];
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) pages.push("ellipsis");

  const rangeStart = Math.max(2, current - 1);
  const rangeEnd = Math.min(total - 1, current + 1);

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i !== 1 && i !== total) pages.push(i);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

export function getShowingRange(page: number, pageSize: number, totalItems: number) {
  if (totalItems === 0) return { start: 0, end: 0 };
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  return { start, end };
}

export function paginateItems<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
