export function FormatInt(int) {
  return new Intl.NumberFormat('en-IN').format(int);
}
