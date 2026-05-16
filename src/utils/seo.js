export function buildSeoTitle(page) {
  return `Claude Makélélé${page ? ` — ${page}` : ""} | Site Officiel`;
}

export function buildCanonical(path) {
  return `https://xn--claudemakll-jbbbb.com${path}`;
}
