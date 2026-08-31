export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^[+\d][\d\s\-()]{7,17}$/.test(v.trim());
export const isRequired = (v: string) => v.trim().length > 1;
export const isUrl = (v: string) => {
  if (!v.trim()) return true;
  try {
    const u = new URL(v.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};
export const isFutureOrToday = (v: string) => {
  if (!v) return false;
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d.getTime() >= today.getTime();
};
