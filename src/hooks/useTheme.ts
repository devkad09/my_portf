// Theme hook simplified: site is dark-only.
export function useTheme() {
  const theme = "dark" as const;
  const toggleTheme = () => {
    /* no-op: light mode removed */
  };
  return { theme, toggleTheme };
}
