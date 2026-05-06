export const deriveSocketUrl = (apiUrl: string): string => {
  if (apiUrl.startsWith('/')) return '';
  try {
    const url = new URL(apiUrl);
    return url.origin;
  } catch {
    return '';
  }
};
