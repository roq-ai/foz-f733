interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Project Manager'],
  tenantName: 'Startup',
  applicationName: 'FOZ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all gigs posted by the Startup',
    'Bid on gigs posted by the Startup',
    'Manage own bids',
    'Delete own bids',
  ],
  ownerAbilities: [
    'Manage Startup profile',
    'View all gigs posted by Startup',
    'Invite Project Managers',
    'View all bids on gigs posted by Startup',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9c5fa717-42a4-470b-8ec6-cf0d0f4e437e',
};
