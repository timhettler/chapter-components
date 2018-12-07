export default function prefersReducedMotion() {
  if (
    'matchMedia' in window &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return true;
  }

  return false;
}
