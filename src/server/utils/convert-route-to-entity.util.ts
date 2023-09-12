const mapping: Record<string, string> = {
  bids: 'bid',
  gigs: 'gig',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
