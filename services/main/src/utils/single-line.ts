export function singleLine(arr: TemplateStringsArray): string {
  return String.raw(arr)
    .split('\n')
    .map((l) => l.trim())
    .join(' ');
}
